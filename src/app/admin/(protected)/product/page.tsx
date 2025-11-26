
import { ProductTable } from "@/module/product/components/ProductTable";
import { Button } from "@/shared/components/Button";

const AdminUser: React.FC = () => {
    return <>
        <div className="flex justify-between mb-10">
            <h1 className="text-2xl">Produk</h1>
            <Button variant="primary">Tambah Produk</Button>
        </div>
        <ProductTable
            data={[
                {
                    id: "ini-id",
                    nama: "Produk A",
                    gambar: "/path/to/image-a.jpg",
                    harga: 100000
                },
                {
                    id: "ini-id-2",
                    nama: "Produk B",
                    gambar: "/path/to/image-b.jpg",
                    harga: 200000
                }
            ]}
        />
    </>
}

export default AdminUser;