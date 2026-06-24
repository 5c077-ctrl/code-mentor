import { Router, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/users/me - Current user profile
router.get('/me', authMiddleware, async (req: AuthRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, username: true, xp: true, level: true, streak: true, createdAt: true, progress: { include: { lesson: { select: { title: true, xpReward: true } } } } }
  });
  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.json(user);
});

// GET /api/users/leaderboard
router.get('/leaderboard', authMiddleware, async (_req, res) => {
  const top = await prisma.user.findMany({
    take: 10, orderBy: { xp: 'desc' },
    select: { username: true, xp: true, level: true, streak: true }
  });
  return res.json(top);
});

export default router;