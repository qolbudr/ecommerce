import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";

export const ModalEditUser = () => {
  const modal = useModalStore();

  return (
    <Modal
      identifier="edit-user"
      title="Ubah User"
      cta={[
        <Button variant="outline">Hapus</Button>,
        <Button>Simpan</Button>
      ]}
    >
      <form className="space-y-4 p-8 font-poppins">
        <Input label="Nama" placeholder="Masukkan nama lengkap" />
        <Input label="Nomor Telepon " placeholder="Masukkan nomor telepon" type="tel" />
        <Input label="Email" placeholder="Masukkan email" type="email" />
      </form>
    </Modal>
  )
}