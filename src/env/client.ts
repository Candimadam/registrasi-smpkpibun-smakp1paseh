import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'
import { coolify } from '@t3-oss/env-core/presets-zod'

export const env = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: process.env.NODE_ENV === 'development' ? z.url() : z.url().optional(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
  isServer: false,
  extends: [coolify()],
})
