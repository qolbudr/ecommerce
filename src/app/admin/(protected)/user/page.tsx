'use client';

import { ModalCreateUser } from "@/module/user/components/ModalCreateUser";
import { ModalDeleteUser } from "@/module/user/components/ModalDeleteUser";
import { ModalEditUser } from "@/module/user/components/ModalEditUser";
import { ModalViewUser } from "@/module/user/components/ModalViewUser";
import { UserTable } from "@/module/user/components/UserTable";
import { Button } from "@/shared/components/Button";
import { useModalStore } from "@/shared/store/modal.store";

const AdminUser: React.FC = () => {
    const modal = useModalStore();

    return <>
        <div className="flex justify-between mb-10">
            <h1 className="text-2xl">Dashboard</h1>
            <Button onClick={() => modal.openModal('add-user')} variant="primary">Tambah User</Button>
        </div>
        <UserTable />
        <ModalCreateUser />
        <ModalViewUser />
        <ModalEditUser />
        <ModalDeleteUser />
    </>
}

export default AdminUser;