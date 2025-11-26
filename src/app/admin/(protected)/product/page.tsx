'use client';

import { ModalCreateProduct } from "@/module/product/components/ModalCreateProduct";
import { ModalDeleteProduct } from "@/module/product/components/ModalDeleteProduct";
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
        <ProductTable/>
        <ModalCreateProduct/>
        <ModalEditProduct/>
        <ModalDeleteProduct/>
    </>
}

export default AdminUser;