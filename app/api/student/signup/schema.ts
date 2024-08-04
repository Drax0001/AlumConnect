import { z } from 'zod' 

const signupSchema = z.object({
    email: z.string().email('Enter a valid email'),
    username: z.string().toLowerCase().min(3, 'username must contain atleast 3 characters'),
    password: z.string().min(8, 'Password must contain atleast 8 characters'),
    faculty: z.string(),
    department: z.string(),
    areasOfFocusArray: z.array(z.string())
})

export default signupSchema;