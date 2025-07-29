import { Session } from './auth-client'

export function isAdmin(session: Session): boolean {
  return session.user.role === 'admin'
}
