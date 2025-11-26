import { AdminNavbar } from "@/module/admin/components/Navbar";
import { AdminSidebar } from "@/module/admin/components/Sidebar";
import { Icon } from "@iconify/react";

export default function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#F8F8F8] h-screen flex flex-col">
            <AdminNavbar/>
            <div className="flex-1">
                <div className="flex h-full">
                    <AdminSidebar/>
                    <main className="p-8 w-full overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}