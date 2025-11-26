'use client';

import DashboardCard from "@/module/dashboard/components/DashboardCard";
import ProductTable from "@/module/dashboard/components/ProductTable";
import { useDashboardStore } from "@/module/dashboard/store/dashboard.store";
import { useEffect } from "react";

const Dashboard: React.FC = () => {
    const store = useDashboardStore();

    useEffect(() => {
        store.getSummary();
    }, [])

    return (
        <div className="space-y-4">
            <h1 className="text-2xl">Dashboard</h1>
            <div className="grid grid-cols-4 gap-x-4 mb-10">
                <DashboardCard title="Users" value={store.summary?.totalUsers ?? 0} unit="people" />
                <DashboardCard title="Jumlah User Aktif" value={store.summary?.activeUsers ?? 0} unit="people" />
                <DashboardCard title="Jumlah Produk" value={store.summary?.totalProducts ?? 0} unit="people" />
                <DashboardCard title="Jumlah Produk Aktif" value={store.summary?.activeProducts ?? 0} unit="people" />
            </div>
            <div className="w-full bg-white rounded-2xl py-6 px-7">
                <h1 className="font-bold text-l mb-5">Produk Terbaru</h1>
                <ProductTable
                    data={store.summary?.latestProducts || []}
                />
            </div>
        </div>
    );
}

export default Dashboard;