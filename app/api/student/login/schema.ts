import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email('Enter a valid email address'),
    password: z.string().min(8, 'Password must contain atleast 8 characters')
})

export default loginSchema