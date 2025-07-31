import { z } from 'zod'
import { publicProcedure, createTRPCRouter, protectedProcedure, adminProcedure } from '../init'

export const appRouter = createTRPCRouter({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text}`,
      }
    }),

  testProtected: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `protected hello ${input.text}`,
      }
    }),
  testAdmin: adminProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `admin hello ${input.text}`,
      }
    }),
})

export type AppRouter = typeof appRouter
