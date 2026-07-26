import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force all pages to be statically generated at build time
  // This means the SQLite database is only accessed during `next build`, not at runtime
  output: 'standalone',
  
  // Ensure Prisma binary is bundled for the build environment
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;
