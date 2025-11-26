import { create } from "zustand";
import { BaseStatus } from "@/shared/types/BaseStatus";
import { Product } from "@/shared/types/Product";
import productService from "../service/product.service";

interface ProductState {
    status: BaseStatus,
    products: Product[],
    getUsers: () => Promise<void>
    addUser: (data: Partial<Product>) => Promise<ProductState>
    updateUser: (id: string, data: Partial<Product>) => Promise<void>
    deleteUser: (user: Product | undefined) => Promise<void>
}

export const useProductStore = create<ProductState>()(
    (set, get) => ({
        status: BaseStatus.initial(),
        products: [],
        getUsers: async () => {
            try {
                set({ status: BaseStatus.loading() });
                const products = await productService.list();
                set({ products, status: BaseStatus.success('Products fetched successfully') });
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        },
        addUser: async (data: Partial<Product>): Promise<ProductState> => {
            try {
                set({ status: BaseStatus.loading() });
                const newProduct = await productService.add(data);
                set({ status: BaseStatus.success('Product added successfully') });
                get().getUsers();
                return get();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
                return get();
            }
        },
        updateUser: async (id: string, data: Partial<Product>) => {
            try {
                set({ status: BaseStatus.loading() });
                await productService.update(id, data);
                set({ status: BaseStatus.success('Product updated successfully') });
                get().getUsers();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        },
        deleteUser: async (user: Product | undefined) => {
            try {
                set({ status: BaseStatus.loading() });
                await productService.deleteProduct(user?.id!);
                set({ status: BaseStatus.success('Product deleted successfully') });
                get().getUsers();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        }
    })
)
