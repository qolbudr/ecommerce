import { Product } from "@/shared/types/Product"

export const ProductCard = ({product}: {product: Product}) => {
    return <div className="w-full px-4 py-8 hover:shadow-md border border-transparent hover:border-neutral-40 transition-all duration-200 cursor-pointer">
        <img src={product.gambar} alt="Product Image" className="w-full h-[250px] object-cover" />
        <h5 className="text-m font-playfair font-bold mt-3">{product.nama}</h5>
        <h5 className="text-m text-primary font-bold">{product.harga?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h5>
    </div>
}