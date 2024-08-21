import { z } from 'zod'

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

//type inference in jod


export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
})

//type inference in jod

export const createBolgInput = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateBolgInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

export type UpdateBlogInput = z.infer<typeof updateBolgInput>
export type CreateBlogInput = z.infer<typeof createBolgInput>
export type SigninInput = z.infer<typeof signinInput>
export type SignupInput = z.infer<typeof signupInput>



