'use client';

import { useState } from "react";
import ProfileModal from "./ProfileModal"
import { useAuthStore } from "@/module/auth/store/auth.store";
import { useRouter } from "next/navigation";

export const AdminNavbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const store = useAuthStore();
    const router = useRouter();

    const logoutHandler = async () => {
        await store.logout();
        router.replace("/admin/login");
    }

    return <div className="w-full flex bg-white justify-between py-5 border border-gray-200 pr-8">
        <div className="w-[300px] flex justify-center items-center">
            <img src="/logo-vascomm.png" alt="Vascomm Logo" className="h-8 w-auto mr-4" />
        </div>
        <div className="flex items-center cursor-pointer">
            <div className="text-right mr-4">
                <h5 className="text-primary text-xs">Halo Admin,</h5>
                <h3>{store.user?.nama}</h3>
            </div>
            <img src={`https://ui-avatars.com/api/?name=${store.user?.nama}`} className="size-10 rounded-full" onClick={() => setIsModalOpen(true)}></img>
            <ProfileModal userEmail={store.user?.email || ""} userName={store.user?.nama || ""} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLogout={logoutHandler} />
        </div>
    </div>
}

