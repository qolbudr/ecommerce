import { Icon, IconifyIcon } from "@iconify/react";
import classNames from "classnames";
import { Loader } from "./Loader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    icon?: string | IconifyIcon;
    fullWidth?: boolean;
    dense?: boolean;
    loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', dense = true, fullWidth = false, loading = false, ...props }) => {
    const className = classNames({
        'bg-primary text-white': variant === 'primary',
        'border border-primary text-primary': variant === 'outline',
        'w-full': fullWidth,
        'tracking-widest': !dense,
        '!bg-neutral-200 !text-neutral-600': loading,
    },
        'inline-flex py-2.5 px-4 font-bold text-center cursor-pointer transition-colors duration-200 items-center justify-center',
        props.className,
    )

    return (
        <button
            {...props}
            className={className}>
            {props.icon && <Icon icon={props.icon} className="mr-2" />}
            {loading ? <Loader /> : props.children}
        </button>
    );
}