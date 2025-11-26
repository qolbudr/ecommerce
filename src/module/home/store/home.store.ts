import { create } from "zustand";
import { BaseStatus } from "@/shared/types/BaseStatus";
import { Summary } from "@/shared/types/Summary";
import { Product } from "@/shared/types/Product";
import productService from "@/module/product/service/product.service";

interface HomeState {
    status: BaseStatus,
    products: Product[],
    getProducts: () => Promise<void>
}

export const useHomeStore = create<HomeState>()(
    (set, get) => ({
        status: BaseStatus.initial(),
        products: [],
        getProducts: async () => {
            try {
                set({ status: BaseStatus.loading() });
                const products = await productService.list('', true);
                set({ products, status: BaseStatus.success('Products fetched successfully') });
            }
            catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        }
    })
)
