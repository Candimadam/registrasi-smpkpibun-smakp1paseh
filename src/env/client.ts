import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
  client: {
    // NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'development' ? z.url() : z.url().optional(),
  },
  runtimeEnv: {
    // NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  isServer: false,
  emptyStringAsUndefined: true,
})
