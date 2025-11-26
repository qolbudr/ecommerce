import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";
import { User } from "@/shared/types/User";

export const ModalViewUser = () => {
  const modal = useModalStore();
  const user = modal.modalData as User | undefined;

  return (
    <Modal
      identifier="view-user"
      title="Lihat User"
      cta={[
        <Button fullWidth={true} onClick={() => modal.closeModal('view-user')}>Tutup</Button>
      ]}
    >
      <form className="space-y-4 p-8 font-poppins">
        <div className="relative">
          <Input label="Nama" placeholder="Masukkan nama lengkap" defaultValue={user?.nama} readOnly />
          <span
            className={`px-4 py-1 absolute top-1/2 right-5 rounded-full text-white text-sm ${user?.status ? "bg-green-primary" : "bg-red-primary"
              }`}
          >
            {user?.status ? 'AKTIF' : 'TIDAK AKTIF'}
          </span>
        </div>
        <Input label="Nomor Telepon " placeholder="Masukkan nomor telepon" type="tel" defaultValue={user?.telepon} readOnly />
        <Input label="Email" placeholder="Masukkan email" type="email" defaultValue={user?.email} readOnly />

      </form>
    </Modal>
  )
}