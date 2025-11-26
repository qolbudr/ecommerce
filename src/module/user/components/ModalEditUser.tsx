import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";
import { RadioSelector } from "@/shared/components/RadioSelector";
import { User } from "@/shared/types/User";
import { useUserStore } from "../store/user.store";
import { useForm } from "react-hook-form";
import { UserUpdateFormValues, userUpdateSchema } from "../schema/update.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useEffect } from "react";

export const ModalEditUser = () => {
  const modal = useModalStore();
  const store = useUserStore();
  const user = modal.modalData as User | undefined;

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<UserUpdateFormValues>({
    resolver: zodResolver(userUpdateSchema),
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      nama: user?.nama,
      telepon: user?.telepon,
      email: user?.email,
      status: user?.status,
    }
  });

  useEffect(() => {
    if (user) {
      reset({
        nama: user.nama,
        telepon: user.telepon,
        email: user.email,
        status: user.status,
      });
    }
  }, [user, reset]);

  const updateUser = async (data: UserUpdateFormValues) => {
    const result = await store.updateUser(user!.id, data);
    if (store.status.isError) return toast.error(store.status.message!);
    reset();
    toast.success(store.status.message!);
    modal.closeModal('edit-user');
  }


  return (
    <Modal
      identifier="edit-user"
      title="Ubah User"
      cta={[
        <Button variant="outline">Hapus</Button>,
        <Button loading={store.status.isLoading} onClick={handleSubmit(updateUser)}>Simpan</Button>
      ]}
    >
      <form className="space-y-4 p-8 font-poppins">
        <Input {...register("nama")} label="Nama" placeholder="Masukkan nama lengkap" error={errors.nama?.message} />
        <Input {...register("telepon")} label="Nomor Telepon" placeholder="Masukkan nomor telepon" type="tel" error={errors.telepon?.message} />
        <Input {...register("email")} label="Email" placeholder="Masukkan email" type="email" error={errors.email?.message} />
        <RadioSelector
          onChange={(value) => setValue('status', value == 'active' ? true : false)}
          value={watch('status') ? 'active' : 'inactive'}
          options={[
            { label: 'Aktif', value: 'active' },
            { label: 'Tidak Aktif', value: 'inactive' }
          ]}
        />
      </form>
    </Modal>
  )
}