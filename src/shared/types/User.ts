export interface User {
  id: string;
  nama: string;
  email: string;
  telepon: string;
  status: boolean;
  password?: string;
  token?: string;
  createdAt: Date;
  role: "ADMIN" | "USER";
};
