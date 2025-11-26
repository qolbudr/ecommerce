import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";

export const ModalCreateUser = () => {
  const modal = useModalStore();

  return (
    <Modal
      identifier="create-job"
      title="Tambah User"
      cta={[
        <Button fullWidth={true}>Simpan</Button>
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