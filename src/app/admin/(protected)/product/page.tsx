'use client';

import { ModalCreateProduct } from "@/module/product/components/ModalCreateProduct";
import { ModalEditProduct } from "@/module/product/components/ModalEditProduct";
import { ProductTable } from "@/module/product/components/ProductTable";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";

const AdminUser: React.FC = () => {
    const modal = useModalStore();
    return <>
        <div className="flex justify-between mb-10">
            <h1 className="text-2xl">Produk</h1>
            <Button onClick={() => modal.openModal('add-product')} variant="primary">Tambah Produk</Button>
        </div>
        <ProductTable
            data={[
                {
                    id: "ini-id",
                    nama: "Produk A",
                    gambar: "/path/to/image-a.jpg",
                    harga: 100000
                },
                {
                    id: "ini-id-2",
                    nama: "Produk B",
                    gambar: "/path/to/image-b.jpg",
                    harga: 200000
                }
            ]}
        />
        <ModalCreateProduct/>
        <ModalEditProduct/>
    </>
}

export default AdminUser;