import { UserTable } from "@/module/user/components/UserTable";
import { Button } from "@/shared/components/Button";

const AdminUser: React.FC = () => {
    return <>
        <div className="flex justify-between mb-10">
            <h1 className="text-2xl">Dashboard</h1>
            <Button variant="primary">Tambah User</Button>
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
    </>
}

export default AdminUser;