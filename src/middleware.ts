import { betterFetch } from '@better-fetch/fetch'
import { NextRequest, NextResponse } from 'next/server'
import { Session } from './lib/auth'

// Use Sets for faster lookup
const routeGroups = {
  auth: new Set(['/login', '/register']),
  user: new Set(['/registration-form', '/registration-status']),
  admin: new Set(['/dashboard']),
  public: new Set(['/']),
}

// Utility to normalize path
function normalizePath(path: string) {
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
}

// Helper to check admin role
function isAdmin(session: Session) {
  return session.user.role === 'admin'
}

export async function middleware(request: NextRequest) {
  const normalizedPath = normalizePath(request.nextUrl.pathname)

  if (routeGroups.public.has(normalizedPath)) {
    return NextResponse.next()
  }

  let session: Session | null
  try {
    const { data } = await betterFetch<Session>('/api/auth/get-session', {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    })
    session = data
  } catch {
    session = null
  }

  // Not logged in
  if (!session) {
    if (routeGroups.user.has(normalizedPath) || routeGroups.admin.has(normalizedPath)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
  }

  // Auth route redirect
  if (routeGroups.auth.has(normalizedPath)) {
    return NextResponse.redirect(
      new URL(isAdmin(session) ? '/dashboard' : '/registration-form', request.url)
    )
  }

  // User route, but admin
  if (routeGroups.user.has(normalizedPath) && isAdmin(session)) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Admin route, but not admin
  if (routeGroups.admin.has(normalizedPath) && !isAdmin(session)) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)'],
}
