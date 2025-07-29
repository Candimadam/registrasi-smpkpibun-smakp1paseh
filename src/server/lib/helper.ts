import { env } from '@/env/server'
import { Session } from '../auth/auth'

export function isAdminServer(session: Session) {
  return session.user.role === 'admin' || session.user.id === env.ADMIN_USER_ID
}

export function normalizePath(path: string) {
  return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
}
