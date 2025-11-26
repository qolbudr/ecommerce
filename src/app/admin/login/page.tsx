import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";

const AdminLogin: React.FC = () => {
    return <>
        <div className="h-screen items-center justify-center flex ">
            <div className="w-1/2 h-full m-0 relative">
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
                        <form className="space-y-3 mt-8">
                            <Input filled={false} label="Email / Nomor Telpon" type="text" placeholder="Contoh: admin@gmail.com"/>
                            <Input filled={false} label="Password" type="password" placeholder="Masukkan passward"/>
                            <Button fullWidth className="mt-8" type="submit">Masuk</Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default AdminLogin;