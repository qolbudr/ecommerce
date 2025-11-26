import { create } from "zustand";
import { BaseStatus } from "@/shared/types/BaseStatus";
import { Product } from "@/shared/types/Product";
import productService from "../service/product.service";

interface ProductState {
    status: BaseStatus,
    products: Product[],
    getProduct: () => Promise<void>
    addProduct: (data: Partial<Product>) => Promise<ProductState>
    updateProduct: (id: string, data: Partial<Product>) => Promise<void>
    deleteProduct: (product: Product | undefined) => Promise<void>
}

export const useProductStore = create<ProductState>()(
    (set, get) => ({
        status: BaseStatus.initial(),
        products: [],
        getProduct: async () => {
            try {
                set({ status: BaseStatus.loading() });
                const products = await productService.list();
                set({ products, status: BaseStatus.success('Products fetched successfully') });
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        },
        addProduct: async (data: Partial<Product>): Promise<ProductState> => {
            try {
                set({ status: BaseStatus.loading() });
                const newProduct = await productService.add(data);
                set({ status: BaseStatus.success('Product added successfully') });
                get().getProduct();
                return get();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
                return get();
            }
        },
        updateProduct: async (id: string, data: Partial<Product>) => {
            try {
                set({ status: BaseStatus.loading() });
                await productService.update(id, data);
                set({ status: BaseStatus.success('Product updated successfully') });
                get().getProduct();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        },
        deleteProduct: async (product: Product | undefined) => {
            try {
                set({ status: BaseStatus.loading() });
                await productService.deleteProduct(product?.id!);
                set({ status: BaseStatus.success('Product deleted successfully') });
                get().getProduct();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        }
    })
)
