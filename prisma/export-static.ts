// This script runs at build time to export all database content to static JSON files.
// The Next.js pages then import these JSON files instead of querying SQLite at runtime.
// This makes Vercel deployment work perfectly since no database is needed after build.

import { prisma } from '../src/lib/prisma';
import fs from 'fs';
import path from 'path';

async function exportData() {
  console.log('Exporting database to static JSON...');

  const outputDir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1. Export all categories
  const categories = await prisma.category.findMany({
    orderBy: { sortOrder: 'asc' },
    include: {
      _count: { select: { courses: true } },
    },
  });
  fs.writeFileSync(path.join(outputDir, 'categories.json'), JSON.stringify(categories, null, 2));
  console.log(`  Exported ${categories.length} categories`);

  // 2. Export all courses (with category info)
  const courses = await prisma.course.findMany({
    where: { isPublished: true },
    include: {
      category: true,
      _count: { select: { modules: true } },
    },
    orderBy: { title: 'asc' },
  });
  fs.writeFileSync(path.join(outputDir, 'courses.json'), JSON.stringify(courses, null, 2));
  console.log(`  Exported ${courses.length} courses`);

  // 3. Export full course details (with modules, lessons, resources)
  const courseDetails: Record<string, any> = {};
  for (const course of courses) {
    const full = await prisma.course.findUnique({
      where: { slug: course.slug },
      include: {
        modules: {
          orderBy: { sortOrder: 'asc' },
          include: {
            lessons: {
              orderBy: { sortOrder: 'asc' },
              select: {
                id: true,
                title: true,
                slug: true,
                estimatedMinutes: true,
                xpReward: true,
                sortOrder: true,
              },
            },
          },
        },
        category: true,
        resources: {
          orderBy: { sortOrder: 'asc' },
        },
      },
    });
    if (full) {
      courseDetails[course.slug] = full;
    }
  }
  fs.writeFileSync(path.join(outputDir, 'courseDetails.json'), JSON.stringify(courseDetails, null, 2));
  console.log(`  Exported ${Object.keys(courseDetails).length} course details`);

  // 4. Export all lessons with full content (for learn pages)
  const lessonData: Record<string, any> = {};
  for (const course of courses) {
    const courseWithModules = await prisma.course.findUnique({
      where: { slug: course.slug },
      include: {
        modules: {
          orderBy: { sortOrder: 'asc' },
          include: {
            lessons: {
              orderBy: { sortOrder: 'asc' },
            },
          },
        },
      },
    });

    if (!courseWithModules) continue;

    const allLessons = courseWithModules.modules.flatMap((m) => m.lessons);

    for (let i = 0; i < allLessons.length; i++) {
      const lesson = allLessons[i];
      const fullLesson = await prisma.lesson.findUnique({
        where: { id: lesson.id },
        include: {
          module: {
            include: {
              course: {
                select: { title: true, slug: true, id: true },
              },
            },
          },
          quizzes: {
            include: {
              questions: {
                orderBy: { sortOrder: 'asc' },
                include: {
                  answers: {
                    orderBy: { sortOrder: 'asc' },
                  },
                },
              },
            },
          },
        },
      });

      const prevLesson = i > 0 ? { id: allLessons[i - 1].id, title: allLessons[i - 1].title, slug: allLessons[i - 1].slug } : null;
      const nextLesson = i < allLessons.length - 1 ? { id: allLessons[i + 1].id, title: allLessons[i + 1].title, slug: allLessons[i + 1].slug } : null;

      const key = `${course.slug}/${lesson.slug}`;
      lessonData[key] = {
        lesson: fullLesson,
        prevLesson,
        nextLesson,
        allLessons: allLessons.map(l => ({ id: l.id, title: l.title, slug: l.slug, sortOrder: l.sortOrder })),
        courseSlug: course.slug,
        courseTitle: course.title,
      };
    }
  }
  fs.writeFileSync(path.join(outputDir, 'lessons.json'), JSON.stringify(lessonData, null, 2));
  console.log(`  Exported ${Object.keys(lessonData).length} lessons`);

  // 5. Generate barrel index
  const indexContent = `// Auto-generated at build time — DO NOT EDIT
import categoriesData from './categories.json';
import coursesData from './courses.json';
import courseDetailsData from './courseDetails.json';
import lessonsData from './lessons.json';

export const categories = categoriesData as any[];
export const courses = coursesData as any[];
export const courseDetails = courseDetailsData as Record<string, any>;
export const lessons = lessonsData as Record<string, any>;
`;
  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);

  console.log('Static JSON export complete!');
  await prisma.$disconnect();
}

exportData().catch((e) => {
  console.error('Export failed:', e);
  process.exit(1);
});
