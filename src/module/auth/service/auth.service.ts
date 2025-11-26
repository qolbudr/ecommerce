import { auth, db } from "@/shared/lib/firebase";
import apiClient from "@/shared/lib/api";
import { User } from "@/shared/types/User";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { AxiosError } from "axios";

const register = async (nama: string, email: string, telepon: string): Promise<User> => {
    try {
        const response = await apiClient.post<BaseResponse<User>>('/auth/register', { nama, email, telepon });
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
};

const login = async (email: string, password: string): Promise<User> => {
    try {
        const response = await apiClient.post<BaseResponse<User>>('/auth/login', { email, password });
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
};

const logOut = async (): Promise<void> => {
    try {
        const response = await apiClient.get<BaseResponse<void>>('/auth/logout');
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Logout failed');
        throw new Error('An unexpected error occurred');
    }

};

export default { register, login, logOut };

