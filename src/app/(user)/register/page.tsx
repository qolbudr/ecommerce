'use client';

import { RegisterFormValues, registerSchema } from "@/module/auth/schema/register.schema";
import authService from "@/module/auth/service/auth.service";
import { useAuthStore } from "@/module/auth/store/auth.store";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UserRegister: React.FC = () => {
    const store = useAuthStore();

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
        reValidateMode: "onBlur",
    });

    const signup = async (data: RegisterFormValues) => {
        await store.register(data);
        if (store.status.isError) return toast.error(store.status.message!);
        reset();
        toast.success(store.status.message!);
    }

    return <>
        <div className="h-screen items-center justify-center flex ">
            <div className="w-full lg:w-1/2 font-poppins">
                <div className="flex items-center justify-center h-full px-6 lg:px-16">
                    <div className="w-full max-w-md ">
                        <h2 className="text-2xl mb-2">Selamat Datang User</h2>
                        <p className="text-xs text-secondary">Silahkan isi form berikut untuk melakukan pendaftaran</p>
                        <form className="space-y-3 mt-8" onSubmit={handleSubmit(signup)}>
                            <Input label="Nama Lengkap" type="text" placeholder="Contoh: Abid Fauzi" {...register("nama")} error={errors.nama?.message} />
                            <Input label="Email" type="text" placeholder="Contoh: user@gmail.com" {...register("email")} error={errors.email?.message} />
                            <Input label="Nomor Telepon" type="text" placeholder="Contoh: 08123456789" {...register("telepon")} error={errors.telepon?.message} />
                            <Button loading={store.status.isLoading} fullWidth className="mt-8" type="submit">Daftar</Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default UserRegister;