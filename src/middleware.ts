import { betterFetch } from '@better-fetch/fetch'
import type { auth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

const alreadyAuthenticatedRoute = ['/login', '/register']
const protectedRoute = ['/registration-form', '/registration-status', '/dashboard']

function isAlreadyAuthenticatedRoute(path: string) {
  return alreadyAuthenticatedRoute.includes(path)
}

function isProtectedRoute(path: string) {
  return protectedRoute.includes(path)
}

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<typeof auth.$Infer.Session>('/api/auth/get-session', {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  })

  const path = request.nextUrl.pathname

  if (session && isAlreadyAuthenticatedRoute(path)) {
    return NextResponse.redirect(new URL('/registration-form', request.url))
  }

  if (!session && isProtectedRoute(path)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)'],
}
