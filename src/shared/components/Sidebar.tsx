import { SidebarItem } from "./SidebarItem"

export const AdminSidebar: React.FC = () => {
    return <div className="w-[300px] py-4 h-full bg-white">
        <ul>
            <SidebarItem path={"/admin/dashboard"} title="Manajemen Kategori" icon="mdi:home-outline" />
            <SidebarItem path={"/admin/user"} title="Manajemen User" icon="mdi:user" />
            <SidebarItem path={"/admin/product"} title="Manajemen Produk" icon="mdi:box" />
        </ul>
    </div>
}