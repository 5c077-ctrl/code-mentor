import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import rateLimit from 'express-rate-limit';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Strict rate limit for auth
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: { error: 'Too many attempts. Try again in 15 minutes.' } });

const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/),
  password: z.string().min(8).regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must have uppercase, lowercase, and number'),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

function generateTokens(userId: string) {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET!, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}

// POST /api/auth/register
router.post('/register', authLimiter, async (req: Request, res: Response) => {
  const parse = registerSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.errors[0].message });

  const { email, username, password } = parse.data;
  try {
    const exists = await prisma.user.findFirst({ where: { OR: [{ email }, { username }] } });
    if (exists) return res.status(409).json({ error: 'Email or username already taken' });

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({ data: { email, username, passwordHash } });

    const { accessToken, refreshToken } = generateTokens(user.id);
    await prisma.refreshToken.create({ data: { token: refreshToken, userId: user.id } });

    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 * 1000 });
    return res.status(201).json({ accessToken, user: { id: user.id, email: user.email, username: user.username, xp: user.xp, level: user.level } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/auth/login
router.post('/login', authLimiter, async (req: Request, res: Response) => {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: 'Invalid credentials' });

  const { email, password } = parse.data;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid email or password' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: 'Invalid email or password' });

    const { accessToken, refreshToken } = generateTokens(user.id);
    await prisma.refreshToken.create({ data: { token: refreshToken, userId: user.id } });
    await prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });

    res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 * 1000 });
    return res.json({ accessToken, user: { id: user.id, email: user.email, username: user.username, xp: user.xp, level: user.level, streak: user.streak } });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/auth/refresh
router.post('/refresh', async (req: Request, res: Response) => {
  const token = req.cookies?.refreshToken;
  if (!token) return res.status(401).json({ error: 'No refresh token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as { userId: string };
    const stored = await prisma.refreshToken.findFirst({ where: { token, userId: payload.userId } });
    if (!stored) return res.status(401).json({ error: 'Invalid refresh token' });

    const { accessToken, refreshToken: newRefresh } = generateTokens(payload.userId);
    await prisma.refreshToken.delete({ where: { id: stored.id } });
    await prisma.refreshToken.create({ data: { token: newRefresh, userId: payload.userId } });

    res.cookie('refreshToken', newRefresh, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 * 1000 });
    return res.json({ accessToken });
  } catch {
    return res.status(401).json({ error: 'Invalid or expired refresh token' });
  }
});

// POST /api/auth/logout
router.post('/logout', async (req: Request, res: Response) => {
  const token = req.cookies?.refreshToken;
  if (token) await prisma.refreshToken.deleteMany({ where: { token } });
  res.clearCookie('refreshToken');
  return res.json({ message: 'Logged out' });
});

export default router;