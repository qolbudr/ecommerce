import DashboardCard from "@/module/dashboard/components/DashboardCard";
import ProductTable from "@/module/dashboard/components/ProductTable";

const Dashboard: React.FC = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl">Dashboard</h1>
            <div className="grid grid-cols-4 gap-x-4 mb-10">
                <DashboardCard title="Users" value={120} unit="people" />
                <DashboardCard title="Jumlah User Aktif" value={120} unit="people" />
                <DashboardCard title="Jumlah Produk" value={120} unit="people" />
                <DashboardCard title="Jumlah Produk Aktif" value={120} unit="people" />
            </div>
            <div className="w-full bg-white rounded-2xl py-6 px-7">
                <h1 className="font-bold text-l mb-5">Produk Terbaru</h1>
                <ProductTable
                    data={[
                        {
                            id: 1,
                            name: "Produk 1",
                            image: "/images/sample-product.png",
                            date: "2023-10-01",
                            price: "100,000",
                        }
                    ]}
                />
            </div>
        </div>
    );
}

export default Dashboard;