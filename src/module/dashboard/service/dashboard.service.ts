import apiClient from "@/shared/lib/api";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { Summary } from "@/shared/types/Summary";
import { AxiosError } from "axios";

const get = async (): Promise<Summary> => {
    try {
        const response = await apiClient.get<BaseResponse<Summary>>('/dashboard/summary');
        const body = response.data;
        return body.data;
    } catch (error) {
        console.log(error);
        if (error instanceof AxiosError) throw new Error(error.response?.data.error || 'Login failed');
        throw new Error('An unexpected error occurred');
    }
}

export default { get };