import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const lessonId = searchParams.get('lessonId');

    if (!lessonId) {
      return NextResponse.json({ error: 'Lesson ID required' }, { status: 400 });
    }

    const note = await prisma.note.findFirst({
      where: {
        userId: session.userId,
        lessonId: lessonId,
      },
    });

    return NextResponse.json({ note: note ? note.content : '' });
  } catch (error) {
    console.error('Fetch notes error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { lessonId, content } = await request.json();

    if (!lessonId) {
      return NextResponse.json({ error: 'Lesson ID required' }, { status: 400 });
    }

    // Upsert note (create or update)
    const existingNote = await prisma.note.findFirst({
      where: {
        userId: session.userId,
        lessonId: lessonId,
      },
    });

    if (existingNote) {
      await prisma.note.update({
        where: { id: existingNote.id },
        data: { content },
      });
    } else {
      await prisma.note.create({
        data: {
          userId: session.userId,
          lessonId: lessonId,
          content,
        },
      });
    }

    return NextResponse.json({ message: 'Note saved successfully' });
  } catch (error) {
    console.error('Save notes error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
