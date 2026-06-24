import { prisma } from './prisma';

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
            }
          }
        }
      },
      category: true,
      resources: {
        orderBy: { sortOrder: 'asc' }
      }
    }
  });
}

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
          progress: { where: { status: 'completed' } }
        }
      }
    }
  });
  
  return user;
}
