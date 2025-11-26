import { useModalStore } from "@/shared/store/modal.store";
import { useUserStore } from "../store/user.store";
import toast from "react-hot-toast";
import { ModalConfirmation } from "@/shared/components/ModalConfirmation";
import { User } from "@/shared/types/User";

export const ModalDeleteUser = () => {
  const modal = useModalStore();
  const store = useUserStore();
  const user = modal.modalData as User | undefined;

  const deleteUser = async () => {
    const result = await store.deleteUser(user);
    if (store.status.isError) return toast.error(store.status.message!);
    toast.success('User has been deleted successfully');
    modal.closeModal('delete-user');
  }

  return (
    <ModalConfirmation
      identifier="delete-user"
      title="Hapus User"
      cta={[
        <button onClick={() => modal.closeModal('delete-user')} className="px-5 py-2 bg-gray-200 text-gray-700 cursor-pointer rounded-md">Batal</button>,
        <button onClick={deleteUser} className="px-5 py-2 bg-primary text-white rounded-md cursor-pointer">{store.status.isLoading ? 'Menghapus...' : 'Hapus'}</button>
      ]}
    >
      <div className="pt-12 pb-6 px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Konfirmasi Hapus</h2>
        <p className="text-gray-500">
          Apakah kamu yakin menghapus {" "}
          <span className="text-black">"{user?.nama}"</span>?
        </p>
      </div>
    </ModalConfirmation>
  )
}