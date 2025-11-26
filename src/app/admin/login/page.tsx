'use client';

import { LoginFormValues, loginSchema } from "@/module/auth/schema/login.schema";
import { useAuthStore } from "@/module/auth/store/auth.store";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const AdminLogin: React.FC = () => {
    const store = useAuthStore();
    const router = useRouter();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onChange",
        reValidateMode: "onBlur",
    });

    const login = async (data: LoginFormValues) => {
        const result = await store.login(data);
        if (result.status.isError) return toast.error(result.status.message!);
        toast.success('Login successful');
        if (result?.user?.role === 'ADMIN') return router.replace('/admin/dashboard');
        router.replace('/');
    }

    return <>
        <div className="h-screen items-center justify-center flex ">
            <div className="hidden xl:block w-1/2 h-full m-0 relative">
                <img src="/images/misc/side-login.png" alt="Login Illustration" className="w-full h-full object-cover" />
                <div className="absolute inset-0">
                    <div className="flex items-center w-full h-full justify-center">
                        <div className="space-y-8 text-center max-w-[430px]">
                            <h1 className="text-5xl font-bold">NAMA APLIKASI</h1>
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 font-poppins">
                <div className="flex items-center justify-center h-full px-6 lg:px-16">
                    <div className="w-full max-w-md ">
                        <h2 className="text-2xl mb-2">Selamat Datang Admin</h2>
                        <p className="text-xs text-secondary">Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</p>
                        <form onSubmit={handleSubmit(login)} className="space-y-3 mt-8">
                            <Input label="Email / Nomor Telpon" type="text" placeholder="Contoh: admin@gmail.com" {...register("email")} error={errors.email?.message} />
                            <Input withShowHide={true} label="Password" type="password" placeholder="Masukkan passward" {...register("password")} error={errors.password?.message} />
                            <Button fullWidth className="mt-8" type="submit" loading={store.status.isLoading}>Masuk</Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default AdminLogin;