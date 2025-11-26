'use client';

import { ModalCreateUser } from "@/module/user/components/ModalCreateUser";
import { UserTable } from "@/module/user/components/UserTable";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";

const AdminUser: React.FC = () => {
    const modal = useModalStore();

    return <>
        <div className="flex justify-between mb-10">
            <h1 className="text-2xl">Dashboard</h1>
            <Button onClick={() => modal.openModal('create-job')} variant="primary">Tambah User</Button>
        </div>
        <UserTable
            data={[
                {
                    id: "ini-id",
                    nama: "Abid",
                    email: "abid@example.com",
                    telepon: "08123456789",
                    status: "AKTIF",
                    password: "password123",
                    role: "ADMIN" 
                },
                {
                    id: "ini-id",
                    nama: "Abid",
                    email: "abid@example.com",
                    telepon: "08123456789",
                    status: "AKTIF",
                    password: "password123",
                    role: "ADMIN" 
                }
            ]}
        />
        <ModalCreateUser/>
    </>
}

export default AdminUser;