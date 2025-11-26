import { z } from "zod";

export const registerSchema = z.object({
  nama: z.string().min(1, "Nama is required"),
  email: z.email().min(1, "Email is required"),
  telepon: z.string().min(1, "Telepon is required"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;