'use client';

import { Icon } from "@iconify/react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const SidebarItem = ({ title, icon, path }: { title: string, icon?: string, path: string }) => {
    const router = useRouter();
    const pathname = usePathname();

    const classname = classNames({
        'bg-primary text-white': pathname === path,
    });

    return <li onClick={() => router.push(path)} className={classname + " hover:bg-primary py-3 px-5 hover:text-white cursor-pointer"}>
        {
            icon && <Icon icon={icon} className="inline-flex mb-1.5 mr-2 size-5" />
        }
        {title}
    </li>
}