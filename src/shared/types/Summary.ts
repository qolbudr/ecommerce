import { Product } from "@/shared/types/Product";

export interface Summary {
    totalUsers: number;
    totalProducts: number;
    activeUsers: number;
    activeProducts: number;
    latestProducts: Product[];
};

export namespace Summary {
    export function parse(data: any): Summary {
        return {
            totalUsers: Number(data.totalUsers ?? 0),
            totalProducts: Number(data.totalProducts ?? 0),
            activeUsers: Number(data.activeUsers ?? 0),
            activeProducts: Number(data.activeProducts ?? 0),
            latestProducts: Array.isArray(data.latestProducts) ? data.latestProducts.map((item: any) => Product.parse(item)) : [],
        };
    }
}
