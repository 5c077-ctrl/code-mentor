import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

function prepareDatabaseUrl() {
  if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
    const tmpDbPath = path.join('/tmp', 'dev.db');
    
    // Copy bundled seed database to /tmp if it doesn't exist in writable /tmp
    if (!fs.existsSync(tmpDbPath)) {
      const candidates = [
        path.join(process.cwd(), 'prisma', 'dev.db'),
        path.join(process.cwd(), 'dev.db'),
      ];
      
      for (const srcPath of candidates) {
        if (fs.existsSync(srcPath)) {
          try {
            fs.copyFileSync(srcPath, tmpDbPath);
            break;
          } catch (err) {
            console.error('Failed to copy db to /tmp:', err);
          }
        }
      }
    }
    
    if (fs.existsSync(tmpDbPath)) {
      process.env.DATABASE_URL = `file:${tmpDbPath}`;
    }
  }
}

prepareDatabaseUrl();

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
