import { z } from 'zod' 

const eventSchema = z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    time: z.string(),
    category: z.string(),
    location: z.string(),
    authorId: z.number()
})

export default eventSchema;