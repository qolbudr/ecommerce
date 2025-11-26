import { SidebarItem } from "./SidebarItem"

export const AdminSidebar: React.FC = () => {
    return <div className="w-[300px] py-4 h-full bg-white">
        <ul>
            <SidebarItem active={false} title="Manajemen Kategori" icon="mdi:home-outline" />
            <SidebarItem active={false} title="Manajemen User" icon="mdi:user" />
            <SidebarItem active={false} title="Manajemen Produk" icon="mdi:box" />
        </ul>
    </div>
}