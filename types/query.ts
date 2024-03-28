import { z } from "zod"

export const querySchema = z.object({
    query: z.string().min(1).max(99),
})

export type QuerySchema = z.output<typeof querySchema>