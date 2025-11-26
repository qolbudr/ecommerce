import { create } from "zustand";
import { User } from "@/shared/types/User";
import { BaseStatus } from "@/shared/types/BaseStatus";
import userService from "../service/user.service";

interface UserState {
    status: BaseStatus,
    users: User[],
    getUsers: () => Promise<void>
}

export const useUserStore = create<UserState>()(
    (set, get) => ({
        status: BaseStatus.initial(),
        users: [],
        getUsers: async () => {
            try {
                set({ status: BaseStatus.loading() });
                const users = await userService.list();
                set({ users, status: BaseStatus.success('Users fetched successfully') });
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        }
    })
)
