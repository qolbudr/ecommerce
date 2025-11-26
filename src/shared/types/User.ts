export interface User {
  id: string;
  nama: string;
  email: string;
  telepon: string;
  status: "AKTIF" | "TIDAK AKTIF";
  password: string;
  role: "ADMIN" | "USER";
};
