import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";

const UserLogin: React.FC = () => {
    return <>
        <div className="h-screen items-center justify-center flex ">
            <div className="w-full lg:w-1/2 font-poppins">
                <div className="flex items-center justify-center h-full px-6 lg:px-16">
                    <div className="w-full max-w-md ">
                        <h2 className="text-2xl mb-2">Selamat Datang User</h2>
                        <p className="text-xs text-secondary">Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</p>
                        <form className="space-y-3 mt-8">
                            <Input filled={false} label="Email / Nomor Telpon" type="text" placeholder="Contoh: user@gmail.com"/>
                            <Input filled={false} label="Password" type="password" placeholder="Masukkan password"/>
                            <Button fullWidth className="mt-8" type="submit">Masuk</Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default UserLogin;