import { z } from "zod";

export const userSchema = z.object({
  nama: z.string().min(1, "Nama is required"),
  email: z.email().min(1, "Email is required"),
  telepon: z.string().min(1, "Telepon is required"),
  status: z.boolean().optional(),
});

export type UserUpdateFormValues = z.infer<typeof userSchema>;