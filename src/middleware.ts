import { betterFetch } from '@better-fetch/fetch'
import type { auth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'

type Session = typeof auth.$Infer.Session

const alreadyAuthenticatedRoute = ['/login', '/register']
const protectedRoute = ['/registration-form', '/registration-status', '/dashboard']

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<Session>('/api/auth/get-session', {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') || '', // Forward the cookies from the request
    },
  })

  const path = request.nextUrl.pathname

  if (session && alreadyAuthenticatedRoute.includes(path)) {
    // If the user is authenticated and tries to access an already authenticated path, redirect to the
    return NextResponse.redirect(new URL('/registration-form', request.url))
  }

  if (!session && protectedRoute.includes(path)) {
    // If the user is not authenticated and tries to access an authenticated path, redirect to login
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/register', '/registration-form', '/registration-status', '/dashboard'],
}
