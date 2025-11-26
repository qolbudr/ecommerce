import { create } from "zustand";
import { User } from "@/shared/types/User";
import { BaseStatus } from "@/shared/types/BaseStatus";
import userService from "../service/user.service";
import { ca } from "zod/locales";
import authService from "@/module/auth/service/auth.service";

interface UserState {
    status: BaseStatus,
    users: User[],
    getUsers: () => Promise<void>
    addUser: (data: Partial<User>) => Promise<void>
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
        },
        addUser: async (data: Partial<User>) => {
            try {
                set({ status: BaseStatus.loading() });
                const newUser = await authService.register(data.nama!, data.email!, data.telepon!);
                set({ status: BaseStatus.success('User added successfully') });
                get().getUsers();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        }
    })
)
