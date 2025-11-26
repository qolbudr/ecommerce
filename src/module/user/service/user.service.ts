import { auth, db } from "@/shared/lib/firebase";
import apiClient from "@/shared/lib/api";
import { User } from "@/shared/types/User";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { AxiosError } from "axios";

const list = async (nama?: string): Promise<User[]> => {
    try {
        const response = await apiClient.get<BaseResponse<User[]>>('/user?search=' + (nama || ''));
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
};

const update = async (id: string, data: Partial<User>): Promise<User> => {
    try {
        const response = await apiClient.post<BaseResponse<User>>(`/user/${id}`, data);
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
};

const deleteUser = async (id: string): Promise<void> => {
    try {
        await apiClient.delete<BaseResponse<null>>(`/user/${id}`);
        return;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
}

export default { list, update, deleteUser };

