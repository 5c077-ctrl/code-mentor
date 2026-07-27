import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

let prismaInstance: PrismaClient | undefined;

try {
  prismaInstance = globalForPrisma.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaInstance;
} catch (err) {
  console.warn('PrismaClient could not be initialized:', err);
  // Create a dummy proxy to prevent immediate crashes if prisma is accessed
  prismaInstance = new Proxy({}, {
    get() {
      throw new Error('PrismaClient is not available in this environment.');
    }
  }) as any;
}

export const prisma = prismaInstance as PrismaClient;
