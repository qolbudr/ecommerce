import { Modal } from "@/shared/components/Modal";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";
import { Input } from "@/shared/components/Input";
import { useUserStore } from "../store/user.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, registerSchema } from "@/module/auth/schema/register.schema";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const ModalCreateUser = () => {
  const modal = useModalStore();
  const store = useUserStore();

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    reValidateMode: "onBlur",
  });

  const addUser = async (data: RegisterFormValues) => {
    const result = await store.addUser(data);
    if (store.status.isError) return toast.error(store.status.message!);
    reset();
    toast.success(store.status.message!);
    modal.closeModal('add-user');
  }

  return (
    <Modal
      identifier="add-user"
      title="Tambah User"
      cta={[
        <Button loading={store.status.isLoading} onClick={handleSubmit(addUser)} fullWidth={true} type="submit">Simpan</Button>
      ]}
    >
      <div className="space-y-4 p-8 font-poppins">
        <Input label="Nama" placeholder="Masukkan nama lengkap" {...register("nama")} error={errors.nama?.message} />
        <Input label="Nomor Telepon " placeholder="Masukkan nomor telepon" type="tel" {...register("telepon")} error={errors.telepon?.message} />
        <Input label="Email" placeholder="Masukkan email" type="email" {...register("email")} error={errors.email?.message} />
      </div>
    </Modal>
  )
}