import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import { coolify } from '@t3-oss/env-core/presets-zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.url(),
    BETTER_AUTH_SECRET: process.env.NODE_ENV === 'production' ? z.string() : z.string().optional(),
    BETTER_AUTH_URL: z.url(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    RESEND_API_KEY: z.string(),
    RESEND_EMAIL_FROM: z.email(),
    ADMIN_USER_ID: z.string(),
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  },
  // For Next.js >= 13.4.4, you can just reference process.env:
  experimental__runtimeEnv: process.env,
  isServer: true,
  extends: [coolify()],
  emptyStringAsUndefined: true,
})
