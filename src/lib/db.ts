import { prisma } from './prisma';

// Static JSON fallback imports for Vercel Serverless
let staticCategories: any[] = [];
let staticCourses: any[] = [];
let staticCourseDetails: Record<string, any> = {};
let staticLessons: Record<string, any> = {};

try {
  const staticData = require('../data');
  staticCategories = staticData.categories || [];
  staticCourses = staticData.courses || [];
  staticCourseDetails = staticData.courseDetails || {};
  staticLessons = staticData.lessons || {};
} catch (e) {
  // Static data not loaded yet, will rely on Prisma
}

// ─── Course Queries ──────────────────────────────────────────────

export async function getAllCourses(categorySlug?: string) {
  // Try static JSON first for instant Vercel response
  if (staticCourses.length > 0) {
    if (!categorySlug) return staticCourses;
    return staticCourses.filter((c: any) => c.category?.slug === categorySlug);
  }

  try {
    return await prisma.course.findMany({
      where: {
        isPublished: true,
        ...(categorySlug ? { category: { slug: categorySlug } } : {}),
      },
      include: {
        category: true,
        _count: { select: { modules: true } },
      },
      orderBy: { title: 'asc' },
    });
  } catch (err) {
    console.error('Database query error in getAllCourses:', err);
    return [];
  }
}

export async function getCourseWithModules(slug: string) {
  // Try static JSON first for instant Vercel response
  if (staticCourseDetails[slug]) {
    return staticCourseDetails[slug];
  }

  try {
    return await prisma.course.findUnique({
      where: { slug },
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
  } catch (err) {
    console.error('Database query error in getCourseWithModules:', err);
    return null;
  }
}

// ─── Lesson Queries ──────────────────────────────────────────────

export async function getLessonById(lessonId: string) {
  try {
    return await prisma.lesson.findUnique({
      where: { id: lessonId },
      include: {
        module: {
          include: {
            course: {
              select: { title: true, slug: true },
            },
            lessons: {
              orderBy: { sortOrder: 'asc' },
              select: { id: true, title: true, slug: true, sortOrder: true },
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
  } catch (err) {
    console.error('Database query error in getLessonById:', err);
    return null;
  }
}

export async function getLessonBySlug(courseSlug: string, lessonSlug: string) {
  const key = `${courseSlug}/${lessonSlug}`;
  if (staticLessons[key]) {
    return staticLessons[key];
  }

  try {
    const course = await prisma.course.findUnique({
      where: { slug: courseSlug },
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

    if (!course) return null;

    const allLessons = course.modules.flatMap((m) => m.lessons);
    const lesson = allLessons.find((l) => l.slug === lessonSlug);

    if (!lesson) return null;

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

    const currentIndex = allLessons.findIndex((l) => l.id === lesson.id);
    const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
    const nextLesson =
      currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

    return {
      lesson: fullLesson,
      prevLesson,
      nextLesson,
      allLessons,
      courseSlug: course.slug,
      courseTitle: course.title,
    };
  } catch (err) {
    console.error('Database query error in getLessonBySlug:', err);
    return null;
  }
}

// ─── Progress Queries ────────────────────────────────────────────

export async function getCourseProgress(userId: string, courseId: string) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: {
        modules: {
          include: {
            lessons: {
              select: { id: true },
            },
          },
        },
      },
    });

    if (!course) return null;

    const allLessonIds = course.modules.flatMap((m) =>
      m.lessons.map((l) => l.id)
    );

    const completedLessons = await prisma.userProgress.findMany({
      where: {
        userId,
        lessonId: { in: allLessonIds },
        status: 'completed',
      },
    });

    return {
      totalLessons: allLessonIds.length,
      completedLessons: completedLessons.length,
      isComplete:
        allLessonIds.length > 0 &&
        completedLessons.length === allLessonIds.length,
      percentage:
        allLessonIds.length > 0
          ? Math.round((completedLessons.length / allLessonIds.length) * 100)
          : 0,
    };
  } catch (err) {
    console.error('Database query error in getCourseProgress:', err);
    return null;
  }
}

// ─── User Stats ──────────────────────────────────────────────────

export async function getUserStats(userId: string) {
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: {
        totalXp: true,
        level: true,
        currentStreak: true,
        _count: {
          select: {
            certificates: true,
            progress: { where: { status: 'completed' } },
          },
        },
      },
    });
  } catch (err) {
    console.error('Database query error in getUserStats:', err);
    return null;
  }
}

// ─── Certificate Queries ─────────────────────────────────────────

export async function getUserCertificates(userId: string) {
  try {
    return await prisma.certificate.findMany({
      where: { userId },
      include: {
        course: {
          select: { title: true, slug: true },
        },
      },
      orderBy: { issuedAt: 'desc' },
    });
  } catch (err) {
    console.error('Database query error in getUserCertificates:', err);
    return [];
  }
}

export async function createCertificate(
  userId: string,
  courseId: string,
  finalScore: number
) {
  try {
    const certNumber = `CM-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    return await prisma.certificate.create({
      data: {
        userId,
        courseId,
        certificateNumber: certNumber,
        finalScore,
      },
      include: {
        user: { select: { username: true } },
        course: { select: { title: true, slug: true } },
      },
    });
  } catch (err) {
    console.error('Database error in createCertificate:', err);
    return null;
  }
}

// ─── Categories ──────────────────────────────────────────────────

export async function getAllCategories() {
  if (staticCategories.length > 0) {
    return staticCategories;
  }

  try {
    return await prisma.category.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        _count: { select: { courses: true } },
      },
    });
  } catch (err) {
    console.error('Database query error in getAllCategories:', err);
    return [];
  }
}
