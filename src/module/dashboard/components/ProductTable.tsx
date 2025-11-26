import { Product } from "@/shared/types/Product";
import React from "react";

interface ProductTableProps {
    title?: string;
    data: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ title = "Produk Terbaru", data }) => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200">
            <div className="grid grid-cols-3 bg-[#5DA0E8] text-white font-semibold py-3 px-4">
                <span>Produk</span>
                <span className="text-center">Tanggal Dibuat</span>
                <span className="text-right">Harga (Rp)</span>
            </div>
            <div className="divide-y divide-gray-100">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-3 items-center py-4 px-4"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-[#1A2850]">{item.nama}</span>
                        </div>
                        <div className="text-center text-gray-500">{new Date(item.createdAt!).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}</div>

                        <div className="text-right font-medium text-[#1A2850]">{item.harga.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTable;
