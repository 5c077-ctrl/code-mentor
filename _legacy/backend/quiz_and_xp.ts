import { Router, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import { io } from '../index';

const router = Router();
const prisma = new PrismaClient();

// XP levels: level = floor(1 + sqrt(xp/100))
function calcLevel(xp: number) { return Math.floor(1 + Math.sqrt(xp / 100)); }

// POST /api/xp/award - Award XP to user
router.post('/award', authMiddleware, async (req: AuthRequest, res: Response) => {
  const { amount, reason } = req.body;
  if (!amount || amount <= 0) return res.status(400).json({ error: 'Invalid XP amount' });

  try {
    const user = await prisma.user.update({
      where: { id: req.userId },
      data: { xp: { increment: amount } }
    });
    const newLevel = calcLevel(user.xp);
    const leveledUp = newLevel > user.level;
    if (leveledUp) await prisma.user.update({ where: { id: req.userId }, data: { level: newLevel } });

    // Emit real-time XP update
    io.to(`user_${req.userId}`).emit('xp_update', { xp: user.xp, level: newLevel, leveledUp, amount, reason });
    return res.json({ xp: user.xp, level: newLevel, leveledUp, xpEarned: amount });
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router;