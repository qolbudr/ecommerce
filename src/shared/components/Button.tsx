import { Icon, IconifyIcon } from "@iconify/react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: string | IconifyIcon;
    fullWidth?: boolean;
    dense?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', dense = true, fullWidth = false, ...props }) => {
    const className = classNames({
        'bg-primary text-white': variant === 'primary',
        'border border-primary text-primary': variant === 'outline',
        'w-full': fullWidth,
        'tracking-widest': !dense,
    },
        'inline-flex py-2.5 px-4 font-bold text-center cursor-pointer transition-colors duration-200 items-center justify-center',
        props.className,
    )

    return (
        <button
            {...props}
            className={className}>
            {props.icon && <Icon icon={props.icon} className="mr-2" />}
            {props.children}
        </button>
    );
}