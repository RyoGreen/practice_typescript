import { z } from "zod";

export const userSchema = z.object({
    firstName: z.string().min(1, "first name is required"),
    lastName: z.string().min(1, "last name is required"),
    email: z.string().email("invalid email address"),
    number: z.number().min(1, "please enter a number greater than 0"),
});

export type UserFormData = z.infer<typeof userSchema>;
