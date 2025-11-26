import { create } from "zustand";
import { BaseStatus } from "@/shared/types/BaseStatus";
import { Summary } from "@/shared/types/Summary";
import dashboardService from "../service/dashboard.service";

interface DashboardState {
    status: BaseStatus,
    summary: Summary | null,
    getSummary: () => Promise<void>
}

export const useDashboardStore = create<DashboardState>()(
    (set, get) => ({
        status: BaseStatus.initial(),
        summary: null,
        getSummary: async () => {
            try {
                set({ status: BaseStatus.loading() });
                const summary = await dashboardService.get();
                set({ summary, status: BaseStatus.success('Summary fetched successfully') });
            } catch (error) {
                set({ status: BaseStatus.error((error as Error).message) });
            }
        }
    })
)
