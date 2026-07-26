import { getLessonBySlug } from '@/lib/db';
import { notFound } from 'next/navigation';
import LessonClientView from './LessonClientView';

export default async function LessonPage({
  params,
}: {
  params: { slug: string; lessonId: string } | Promise<{ slug: string; lessonId: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const { slug, lessonId } = resolvedParams;
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
