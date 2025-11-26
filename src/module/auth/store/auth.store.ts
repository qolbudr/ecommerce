import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '@/shared/types/User'
import { LoginFormValues } from '../schema/login.schema'
import { BaseStatus } from '@/shared/types/BaseStatus'
import authService from '@/module/auth/service/auth.service'
import { RegisterFormValues } from '../schema/register.schema'

interface AuthState {
  status: BaseStatus,
  user: User | null
  setUser: (user: User) => void,
  login: (data: LoginFormValues) => Promise<AuthState>,
  logout: () => Promise<void>
  register: (data: RegisterFormValues) => Promise<AuthState>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      status: BaseStatus.initial(),
      user: null,
      login: async (data) => {
        try {
          set({ status: BaseStatus.loading() });
          const user = await authService.login(data.email, data.password);
          const status = BaseStatus.success('Login successful')
          set({ user, status: status });
          return get();
        } catch (error) {
          set({ status: BaseStatus.error((error as Error).message) });
          return get();
        }
      },
      setUser: (user) => set({ user }),
      logout: async () => {
        await authService.logOut();
        set({ user: null });
      },
      register: async (data) => {
        try {
          set({ status: BaseStatus.loading() });
          const user = await authService.register(data.nama, data.email, data.telepon);
          const status = BaseStatus.success('Registration successful check credentials in your email')
          set({ user, status: status });
          return get();
        } catch (error) {
          set({ status: BaseStatus.error((error as Error).message) });
          return get();
        }
      }
    }),
    { name: 'auth-storage' }
  )
)
