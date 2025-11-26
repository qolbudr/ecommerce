import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";
import { ImageUpload } from "@/shared/components/ImageUpload";

export const ModalEditProduct = () => {
  const modal = useModalStore();

  return (
    <Modal
      identifier="edit-product"
      title="Ubah Produk"
      cta={[
        <Button variant="outline">Hapus</Button>,
        <Button>Simpan</Button>
      ]}
    >
      <form className="space-y-4 p-8 font-poppins">
        <ImageUpload/>
        <Input label="Nama Produk" placeholder="Masukkan nama produk" />
        <Input label="Harga" placeholder="Masukkan harga produk" type="number" />
        <Input label="Deskripsi" placeholder="Masukkan deskripsi produk" />
      </form>
    </Modal>
  )
}