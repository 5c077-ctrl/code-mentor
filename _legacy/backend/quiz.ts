import { Router, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware, AuthRequest } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

// GET /api/quiz/:lessonId - Get quiz for lesson
router.get('/:lessonId', authMiddleware, async (req: AuthRequest, res: Response) => {
  const quiz = await prisma.quiz.findUnique({ where: { lessonId: req.params.lessonId } });
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
  // Don't send correct answers to client
  const questions = (quiz.questions as any[]).map(q => ({ question: q.question, options: q.options }));
  return res.json({ id: quiz.id, questions, passMark: quiz.passMark });
});

// POST /api/quiz/:quizId/submit - Submit quiz answers
router.post('/:quizId/submit', authMiddleware, async (req: AuthRequest, res: Response) => {
  const { answers } = req.body; // array of selected indices
  if (!Array.isArray(answers)) return res.status(400).json({ error: 'Answers must be an array' });

  const quiz = await prisma.quiz.findUnique({ where: { id: req.params.quizId } });
  if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

  const questions = quiz.questions as any[];
  let correct = 0;
  const feedback = questions.map((q, i) => {
    const isCorrect = answers[i] === q.correct;
    if (isCorrect) correct++;
    return { correct: isCorrect, explanation: q.explanation || '' };
  });

  const score = Math.round((correct / questions.length) * 100);
  const passed = score >= quiz.passMark;
  const xpEarned = passed ? 100 + Math.round(score * 0.5) : 10;

  await prisma.quizResult.create({
    data: { userId: req.userId!, quizId: quiz.id, score, passed, xpEarned }
  });

  // Award XP
  await prisma.user.update({ where: { id: req.userId }, data: { xp: { increment: xpEarned } } });

  return res.json({ score, passed, xpEarned, feedback, passMark: quiz.passMark });
});

export default router;