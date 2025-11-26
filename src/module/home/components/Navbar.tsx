'use client';

import { useAuthStore } from "@/module/auth/store/auth.store";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import ProfileModal from "@/shared/components/ProfileModal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar: React.FC = () => {
    const router = useRouter();
    const store = useAuthStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const logoutHandler = async () => {
        setIsModalOpen(false);
        await store.logout();
        router.replace("/");
    }


    return (
        <div className="flex py-5 px-10 justify-between items-center border-b border-neutral-40 bg-white fixed top-0 left-0 right-0 z-20">
            <img src="/logo-vascomm.png" alt="Vascomm Logo" className="h-8" />
            <Input className="max-w-1/2" placeholder="Cari parfum kesukaanmu" suffixicon={'mdi-search'} filled={true} />
            {
                store.user ?
                    <div className="flex items-center cursor-pointer">
                        <div className="text-right mr-4">
                            <h5 className="text-primary text-xs">Halo User,</h5>
                            <h3>{store.user?.nama}</h3>
                        </div>
                        <img src={`https://ui-avatars.com/api/?name=${store.user?.nama}`} className="size-10 rounded-full" onClick={() => setIsModalOpen(true)}></img>
                        <ProfileModal userEmail={store.user?.email || ""} userName={store.user?.nama || ""} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLogout={logoutHandler} />
                    </div>
                    :
                    <div className="flex gap-x-3">
                        <Button onClick={() => router.push('/login')} dense={false} variant="outline">Masuk</Button>
                        <Button onClick={() => router.push('/register')} dense={false}>Daftar</Button>
                    </div>
            }

        </div>
    );
}