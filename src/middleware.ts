import { betterFetch } from '@better-fetch/fetch'
import type { auth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

const alreadyAuthenticatedRoute = ['/login', '/register']
const protectedRoute = ['/registration-form', '/registration-status', '/dashboard']
const publicRoute = ['/']

export async function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname

  const isAlreadyAuthenticatedRoute = alreadyAuthenticatedRoute.includes(pathName)
  const isProtectedRoute = protectedRoute.includes(pathName)
  const isPublicRoute = publicRoute.includes(pathName)

  if (isPublicRoute) {
    return NextResponse.next()
  }

  const { data: session } = await betterFetch<typeof auth.$Infer.Session>('/api/auth/get-session', {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  })

  if (!session) {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  if (isAlreadyAuthenticatedRoute) {
    return NextResponse.redirect(new URL('/registration-form', request.url))
  }

  // TODO: admin route protection

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)'],
}
