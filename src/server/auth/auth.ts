import { betterAuth } from 'better-auth'
import { createAuthMiddleware, APIError } from 'better-auth/api'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { db } from '@/server/lib/db'
import { sendVerificationEmail } from '@/lib/email'
import { env } from '@/env/server'
import { admin } from 'better-auth/plugins'

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: 'postgresql',
  }),
  baseURL: env.NODE_ENV === 'production' ? env.COOLIFY_URL : env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await sendVerificationEmail({ email: user.email, verificationUrl: url })
    },
    autoSignInAfterVerification: true,
  },
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    admin({
      adminUserIds: [env.ADMIN_USER_ID],
    }),
  ],
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const path = ctx.path
      const response = ctx.context.returned as APIError

      // NOTE: Uncomment the following line to log the response for debugging purposes
      // console.info('Auth middleware response', {
      //   path,
      //   response,
      // })

      if (path.startsWith('/sign-up') && response.body?.code === 'USER_ALREADY_EXISTS') {
        throw new APIError('BAD_REQUEST', {
          ...response.body,
          message: 'Akun sudah terdaftar, silakan masuk dengan google atau email dan kata sandi.',
        })
      }
      if (path.startsWith('/sign-in') && response.body?.code === 'INVALID_EMAIL_OR_PASSWORD') {
        throw new APIError('UNAUTHORIZED', {
          ...response.body,
          message: 'Email atau kata sandi salah, login dengan google atau coba lagi.',
        })
      }
      if (path.startsWith('/sign-in') && response.body?.code === 'EMAIL_NOT_VERIFIED') {
        throw new APIError('UNAUTHORIZED', {
          ...response.body,
          message: 'Email belum diverifikasi, silakan periksa email Anda.',
        })
      }
    }),
  },
})

export type Session = typeof auth.$Infer.Session
