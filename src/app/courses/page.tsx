import { getAllCourses, getAllCategories } from '@/lib/db';
import CoursesClientView from './CoursesClientView';

export default async function CoursesPage({
  searchParams,
}: {
  searchParams?: { category?: string } | Promise<{ category?: string }>;
}) {
  const resolvedParams = searchParams ? await Promise.resolve(searchParams) : {};
  const category = resolvedParams?.category;
  const [courses, categories] = await Promise.all([
    getAllCourses(category),
    getAllCategories(),
  ]);

  return <CoursesClientView courses={courses} categories={categories} category={category} />;
}

