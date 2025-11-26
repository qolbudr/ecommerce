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
                { no: 1, nama: "Abid", email: "abid@example.com", telepon: "08123456789", status: "AKTIF" },
                { no: 2, nama: "Budi", email: "budi@example.com", telepon: "08987654321", status: "TIDAK AKTIF" },
                { no: 3, nama: "Citra", email: "citra@example.com", telepon: "08765432109", status: "AKTIF" }
            ]}
        />
    </>
}

export default AdminUser;