export const ProductCard: React.FC = () => {
    return <div className="w-full px-4 py-8 hover:shadow-md border border-transparent hover:border-neutral-40 transition-all duration-200 cursor-pointer">
        <img src="/images/product-dummy/1.png" alt="Product Image" className="w-full" />
        <h5 className="text-m font-playfair font-bold mt-3">Product Name</h5>
        <h5 className="text-m text-primary font-bold">IDR x.xxx.980</h5>
    </div>
}