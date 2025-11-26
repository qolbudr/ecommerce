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

export namespace User {
  export function parse(data: any): User {
    return {
      id: data.id ? String(data.id ?? '') : '',
      nama: String(data.nama ?? ''),
      email: String(data.email ?? ''),
      telepon: String(data.telepon ?? ''),
      status: Boolean(data.status ?? false),
      password: data.password ? String(data.password) : undefined,
      token: data.token ? String(data.token) : undefined,
      createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
      role: data.role === 'ADMIN' ? 'ADMIN' : 'USER',
    };
  }
}
