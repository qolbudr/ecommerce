import { Icon } from "@iconify/react";
import classNames from "classnames";
import React from "react";

export const SidebarItem = ({active, title, icon}: {active: boolean, title: string, icon?: string}) => {
    const classname = classNames({
        'bg-primary text-white': active,
    });

    return <li className={classname + " hover:bg-primary py-3 px-5 hover:text-white cursor-pointer"}>
        {
            icon && <Icon icon={icon} className="inline-flex mb-1.5 mr-2 size-5" />
        }
        {title}
    </li>
}