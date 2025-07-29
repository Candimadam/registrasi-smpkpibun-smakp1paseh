'use client'

import { useTRPC } from '@/server/trpc/client'
import { useQuery } from '@tanstack/react-query'

export function ClientGreeting() {
  const trpc = useTRPC()
  const greeting = useQuery(trpc.hello.queryOptions({ text: 'world' }))

  if (!greeting.data) return <div>Loading...</div>

  return <div>{greeting.data.greeting}</div>
}
