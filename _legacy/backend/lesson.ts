import { Router, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/lessons/languages - All language tracks
router.get('/languages', authMiddleware, async (_req, res) => {
  const langs = await prisma.language.findMany({ include: { modules: { orderBy: { order: 'asc' }, include: { lessons: { orderBy: { order: 'asc' }, select: { id: true, title: true, xpReward: true } } } } } });
  return res.json(langs);
});

// GET /api/lessons/:id - Single lesson
router.get('/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
  const lesson = await prisma.lesson.findUnique({ where: { id: req.params.id }, include: { module: { include: { language: true } } } });
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

  // Check XP requirement
  const user = await prisma.user.findUnique({ where: { id: req.userId } });
  if (!user) return res.status(401).json({ error: 'User not found' });
  if (user.xp < lesson.module.xpRequired) return res.status(403).json({ error: `You need ${lesson.module.xpRequired} XP to unlock this module. You have ${user.xp} XP.` });

  return res.json(lesson);
});

// POST /api/lessons/:id/complete - Mark lesson complete
router.post('/:id/complete', authMiddleware, async (req: AuthRequest, res: Response) => {
  const lesson = await prisma.lesson.findUnique({ where: { id: req.params.id } });
  if (!lesson) return res.status(404).json({ error: 'Lesson not found' });

  const progress = await prisma.progress.upsert({
    where: { userId_lessonId: { userId: req.userId!, lessonId: lesson.id } },
    update: { completed: true, completedAt: new Date() },
    create: { userId: req.userId!, lessonId: lesson.id, completed: true, completedAt: new Date() }
  });

  await prisma.user.update({ where: { id: req.userId }, data: { xp: { increment: lesson.xpReward } } });
  return res.json({ progress, xpEarned: lesson.xpReward });
});

export default router;