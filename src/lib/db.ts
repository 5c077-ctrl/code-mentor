import { prisma } from './prisma';

// ─── Course Queries ──────────────────────────────────────────────

export async function getAllCourses(categorySlug?: string) {
  return prisma.course.findMany({
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
}

export async function getCourseWithModules(slug: string) {
  return prisma.course.findUnique({
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
}

// ─── Lesson Queries ──────────────────────────────────────────────

export async function getLessonById(lessonId: string) {
  return prisma.lesson.findUnique({
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
}

export async function getLessonBySlug(courseSlug: string, lessonSlug: string) {
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

  // Flatten all lessons from all modules
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const lesson = allLessons.find((l) => l.slug === lessonSlug);

  if (!lesson) return null;

  // Get full lesson data with quiz
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

  // Find prev/next lesson
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
}

// ─── Progress Queries ────────────────────────────────────────────

export async function getCourseProgress(userId: string, courseId: string) {
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
}

// ─── User Stats ──────────────────────────────────────────────────

export async function getUserStats(userId: string) {
  const user = await prisma.user.findUnique({
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

  return user;
}

// ─── Certificate Queries ─────────────────────────────────────────

export async function getUserCertificates(userId: string) {
  return prisma.certificate.findMany({
    where: { userId },
    include: {
      course: {
        select: { title: true, slug: true },
      },
    },
    orderBy: { issuedAt: 'desc' },
  });
}

export async function createCertificate(
  userId: string,
  courseId: string,
  finalScore: number
) {
  const certNumber = `CM-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return prisma.certificate.create({
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
}

// ─── Categories ──────────────────────────────────────────────────

export async function getAllCategories() {
  return prisma.category.findMany({
    orderBy: { sortOrder: 'asc' },
    include: {
      _count: { select: { courses: true } },
    },
  });
}
