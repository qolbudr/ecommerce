import { create } from "zustand";
import { User } from "@/shared/types/User";
import { BaseStatus } from "@/shared/types/BaseStatus";
import userService from "../service/user.service";
import { ca } from "zod/locales";
import authService from "@/module/auth/service/auth.service";
import { deleteUser } from "firebase/auth";

interface UserState {
    status: BaseStatus,
    users: User[],
    getUsers: () => Promise<void>
    addUser: (data: Partial<User>) => Promise<UserState>
    updateUser: (id: string, data: Partial<User>) => Promise<void>
    deleteUser: (user: User | undefined) => Promise<void>
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
        addUser: async (data: Partial<User>): Promise<UserState> => {
            try {
                set({ status: BaseStatus.loading() });
                const newUser = await authService.register(data.nama!, data.email!, data.telepon!);
                set({ status: BaseStatus.success('User added successfully') });
                get().getUsers();
                return get();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
                return get();
            }
        },
        updateUser: async (id: string, data: Partial<User>) => {
            try {
                set({ status: BaseStatus.loading() });
                await userService.update(id, data);
                set({ status: BaseStatus.success('User updated successfully') });
                get().getUsers();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        },
        deleteUser: async (user: User | undefined) => {
            try {
                set({ status: BaseStatus.loading() });
                await userService.deleteUser(user?.id!);
                set({ status: BaseStatus.success('User deleted successfully') });
                get().getUsers();
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        }
    })
)
