import React from 'react';
import classNames from "classnames";


interface ButtonProps {
children?: React.ReactNode;
onClick?: () => void;
type?: "button" | "submit" | "reset";
variant?: "primary" | "secondary" | "outline";
disabled?: boolean;
className?: string;
}

function Button({children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    className = ""
} : ButtonProps) {
    const baseStyle = "rounded-full cursor-pointer";

    const variants = {
        primary: "bg-black text-white",
        secondary: "",
        outline: "border-1",
    }

    return (
        <button 
            type={type} 
            onClick={onClick}
            disabled={disabled}
            className={classNames(baseStyle, variants[variant], className)}
        >
            {children}
        </button>
    );
}

export default Button;