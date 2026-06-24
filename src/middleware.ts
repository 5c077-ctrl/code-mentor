import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = process.env.JWT_SECRET || 'secret';
const key = new TextEncoder().encode(secretKey);

export async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  const path = request.nextUrl.pathname;

  const isProtectedRoute = path.startsWith('/dashboard') || path.startsWith('/learn') || path.startsWith('/profile');
  const isAuthRoute = path === '/login' || path === '/register';

  if (isProtectedRoute) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    try {
      await jwtVerify(session, key, { algorithms: ['HS256'] });
    } catch (err) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (isAuthRoute) {
    if (session) {
      try {
        await jwtVerify(session, key, { algorithms: ['HS256'] });
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch (err) {
        // invalid token, allow to login
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/learn/:path*', '/profile/:path*', '/login', '/register'],
};
