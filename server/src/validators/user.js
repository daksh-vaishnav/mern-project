import { z } from 'zod';

export const signUpValidationSchema = z.object({
    name: z.string()
        .min(2, "Name must be atleast 2 Character")
        .max(50, "Name cant be more than 50 char"),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(50, "password can't more than 50 char")
        .regex(/[a-z]/, "Password must contain at least one small letter")
        .regex(/[A-Z]/, "Password must contain at least one capital letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
})

export const signInValidationSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string()
        .min(8, "password must be at least 8 char long")
        .max(50, "password can't more than 50 char")
        .regex(/[A-Z]/, "Password must contain at least one cap latter")
        .regex(/[a-z]/, "Password must contain at least one small latter")
        .regex(/\d/, "Password must contain at least one digit")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special Character")
})