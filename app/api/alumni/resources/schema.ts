import { z } from 'zod' 

const resourceSchema = z.object({
    title: z.string(),
    body: z.string(),
    authorId: z.number(),
})

export default resourceSchema;