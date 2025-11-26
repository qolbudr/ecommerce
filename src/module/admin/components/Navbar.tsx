'use client';

import { useState } from "react";
import ProfileModal from "./ProfileModal"

export const AdminNavbar: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <div className="w-full flex bg-white justify-between py-5 border border-gray-200 pr-8">
        <div className="w-[300px] flex justify-center items-center">
            <img src="/logo-vascomm.png" alt="Vascomm Logo" className="h-8 w-auto mr-4" />
        </div>
        <div className="flex space-x-4 items-center cursor-pointer">
            <div className="text-right">
                <h5 className="text-primary text-xs">Halo Admin,</h5>
                <h3>Aden S. Putra</h3>
            </div>
            <img src="https://ui-avatars.com/api/?name=John+Doe" className="size-10 rounded-full" onClick={() => setIsModalOpen(true)}></img>
            <ProfileModal userEmail="test@gmail.com" userName="aslaksl" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLogout={() => {}} />
        </div>
    </div>
}

