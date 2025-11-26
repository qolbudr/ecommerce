import { z } from "zod";

export const productSchema = z.object({
  nama: z.string().min(1, "Nama is required"),
  gambar: z.string().min(1, "Gambar is required"),
  harga: z.number().min(1, "Harga is required").transform((v) => Number(v) as number),
  status: z.boolean().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;