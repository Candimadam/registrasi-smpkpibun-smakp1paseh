import { Session } from '../server/auth/auth-client'

export function isAdmin(session: Session): boolean {
  return session.user.role === 'admin'
}
