import { NextResponse } from 'next/server';
import { getAllCourses, getAllCategories } from '@/lib/db';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || undefined;

    const [courses, categories] = await Promise.all([
      getAllCourses(category),
      getAllCategories(),
    ]);

    return NextResponse.json({ courses, categories });
  } catch (error) {
    console.error('Courses fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}
