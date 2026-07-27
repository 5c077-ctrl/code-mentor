import { getCourseWithModules } from '@/lib/db';
import { notFound } from 'next/navigation';
import CourseDetailClientView from './CourseDetailClientView';

export default async function CourseDetailPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  const course = await getCourseWithModules(slug);

  if (!course) return notFound();

  return <CourseDetailClientView course={course} />;
}

