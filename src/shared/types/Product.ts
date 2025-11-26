export interface Product {
  id?: string;
  nama: string;
  gambar: string;
  harga: number;
  status: boolean;
};

export namespace Product {
  export function parse(data: any): Product {
    return {
      id: data.id ? String(data.id ?? '') : '',
      nama: String(data.nama ?? ''),
      gambar: String(data.gambar ?? ''),
      harga: Number(data.harga ?? 0),
      status: Boolean(data.status ?? false),
    };
  }
}
