import { getLessonBySlug } from '@/lib/db';
import { notFound } from 'next/navigation';
import LessonClientView from './LessonClientView';

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lessonId: string }>;
}) {
  const { slug, lessonId } = await params;
  const data = await getLessonBySlug(slug, lessonId);

  if (!data || !data.lesson) {
    return notFound();
  }

  return (
    <LessonClientView
      courseSlug={data.courseSlug}
      courseTitle={data.courseTitle}
      lesson={data.lesson}
      prevLesson={data.prevLesson}
      nextLesson={data.nextLesson}
    />
  );
}
