import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { lessonId, xpEarned } = await req.json();

    // Upsert progress
    await prisma.userProgress.upsert({
      where: {
        userId_lessonId: { userId: session.userId as string, lessonId }
      },
      update: {
        status: 'completed',
        completedAt: new Date(),
      },
      create: {
        userId: session.userId as string,
        lessonId,
        status: 'completed',
        completedAt: new Date(),
      }
    });

    // Award XP
    if (xpEarned) {
      await prisma.user.update({
        where: { id: session.userId as string },
        data: { totalXp: { increment: xpEarned } }
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
