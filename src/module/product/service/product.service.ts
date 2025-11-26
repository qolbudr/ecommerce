import { auth, db } from "@/shared/lib/firebase";
import apiClient from "@/shared/lib/api";
import { User } from "@/shared/types/User";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { AxiosError } from "axios";
import { Product } from "@/shared/types/Product";

const add = async (data: Partial<Product>): Promise<Product> => {
    try {
        const response = await apiClient.post<BaseResponse<Product>>('/product', data);
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
}

const list = async (nama?: string, active?: boolean): Promise<Product[]> => {
    try {
        const response = await apiClient.get<BaseResponse<Product[]>>('/product?search=' + (nama || '') + '&active=' + (active !== undefined ? active : ''));
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
};

const update = async (id: string, data: Partial<Product>): Promise<Product> => {
    try {
        const response = await apiClient.post<BaseResponse<Product>>(`/product/${id}`, data);
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
};

const deleteProduct = async (id: string): Promise<void> => {
    try {
        await apiClient.delete<BaseResponse<null>>(`/product/${id}`);
        return;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
}

export default { add, list, update, deleteProduct };

