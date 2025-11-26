import React from "react";

interface ProductItem {
    id: number;
    name: string;
    image: string;
    date: string;
    price: string;
}

interface ProductTableProps {
    title?: string;
    data: ProductItem[];
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
                            <span className="text-[#1A2850]">{item.name}</span>
                        </div>
                        <div className="text-center text-gray-500">{item.date}</div>

                        <div className="text-right font-medium text-[#1A2850]">{item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductTable;
