import { betterAuth } from 'better-auth'
import { createAuthMiddleware, APIError } from 'better-auth/api'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from './prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      // TODO: Implement your email sending logic here
      console.info('Sending verification email', {
        user,
        url,
        token,
        request,
      })
    },
    autoSignInAfterVerification: true,
  },
  socialProviders: {
    // github: {
    //   clientId: process.env.GITHUB_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    // },
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  hooks: {
    after: createAuthMiddleware(async (ctx) => {
      const path = ctx.path
      const response = ctx.context.returned as APIError
      console.info('Auth middleware response', {
        path,
        response,
      })

      if (path.startsWith('/sign-up') && response.body?.code === 'USER_ALREADY_EXISTS') {
        throw new APIError('BAD_REQUEST', {
          ...response.body,
          message: 'Akun sudah terdaftar, silakan masuk dengan google atau email dan kata sandi.',
        })
      }
      if (path.startsWith('/sign-in') && response.body?.code === 'INVALID_EMAIL_OR_PASSWORD') {
        throw new APIError('UNAUTHORIZED', {
          ...response.body,
          message: 'Email atau kata sandi salah',
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
