import { auth, db } from "@/shared/lib/firebase";
import apiClient from "@/shared/lib/api";
import { User } from "@/shared/types/User";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { AxiosError } from "axios";

const list = async (nama?: string): Promise<User[]> => {
    const response = await apiClient.get<BaseResponse<User[]>>('/user?search=' + (nama || ''));
    const body = response.data;
    return body.data;
};

export default { list };

