'use client';

import { useAuthStore } from "@/module/auth/store/auth.store";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/module/auth/schema/login.schema";
import toast, { Toaster } from 'react-hot-toast';

const UserLogin: React.FC = () => {
    const store = useAuthStore();
    const router = useRouter();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        reValidateMode: "onBlur",
    });

    const login = async (data: LoginFormValues) => {
        const user = await store.login(data);
        if (store.status.isError) return toast.error(store.status.message!);
        if (user?.role === 'ADMIN') return router.replace('/admin/dashboard');
        router.replace('/');
        toast.success(store.status.message!);
    }

    return <>
        <div className="h-screen items-center justify-center flex ">
            <div className="w-full lg:w-1/2 font-poppins">
                <div className="flex items-center justify-center h-full px-6 lg:px-16">
                    <div className="w-full max-w-md ">
                        <h2 className="text-2xl mb-2">Selamat Datang User</h2>
                        <p className="text-xs text-secondary">Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</p>
                        <form onSubmit={handleSubmit(login)} className="space-y-3 mt-8">
                            <Input label="Email / Nomor Telpon" type="text" placeholder="Contoh: user@gmail.com" {...register('email')} error={errors.email?.message} />
                            <Input label="Password" type="password" placeholder="Masukkan password" {...register('password')} error={errors.password?.message} />
                            <Button loading={store.status.isLoading} fullWidth className="mt-8" type="submit">Masuk</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default UserLogin;