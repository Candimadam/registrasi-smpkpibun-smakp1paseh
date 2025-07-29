import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { getQueryClient, trpc } from '@/server/trpc/server'
import { ClientGreeting } from './client-greeting'

export default async function TrpcTestPage() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(
    trpc.hello.queryOptions({
      text: 'world',
    })
  )
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientGreeting />
    </HydrationBoundary>
  )
}
