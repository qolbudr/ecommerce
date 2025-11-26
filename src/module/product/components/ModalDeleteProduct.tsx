import { useModalStore } from "@/shared/store/modal.store";
import toast from "react-hot-toast";
import { ModalConfirmation } from "@/shared/components/ModalConfirmation";
import { Product } from "@/shared/types/Product";
import { useProductStore } from "../store/product.store";

export const ModalDeleteProduct = () => {
  const modal = useModalStore();
  const store = useProductStore();
  const product = modal.modalData as Product | undefined;

  const deleteProduct = async () => {
    const result = await store.deleteProduct(product);
    if (store.status.isError) return toast.error(store.status.message!);
    toast.success('Product has been deleted successfully');
    modal.closeModal('delete-product');
  }

  return (
    <ModalConfirmation
      identifier="delete-product"
      title="Hapus Produk"
      cta={[
        <button onClick={() => modal.closeModal('delete-product')} className="px-5 py-2 bg-gray-200 text-gray-700 cursor-pointer rounded-md">Batal</button>,
        <button onClick={deleteProduct} className="px-5 py-2 bg-primary text-white rounded-md cursor-pointer">{store.status.isLoading ? 'Menghapus...' : 'Hapus'}</button>
      ]}
    >
      <div className="pt-12 pb-6 px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Konfirmasi Hapus</h2>
        <p className="text-gray-500">
          Apakah kamu yakin menghapus {" "}
          <span className="text-black">"{product?.nama}"</span>?
        </p>
      </div>
    </ModalConfirmation>
  )
}