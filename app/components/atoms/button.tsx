import React, { FC } from "react";
import clsx from "clsx";

interface ButtonProps {
    variant: string;
    text: string;
    className?: string;
    onClick?: () => void;
    formAction?: (formData: FormData) => Promise<void>;
}

const Button: FC<ButtonProps> = ({
    variant,
    text,
    className,
    onClick,
    formAction,
}) => {
    return (
        <button
            className={clsx(
                "btn hover:opacity-80",
                {
                    "btn-primary": variant === "primary",
                    "btn-secondary": variant === "secondary",
                    "btn-ghost": variant === "ghost",
                },
                "min-h-10 h-10",
                className,
            )}
            onClick={onClick}
            formAction={formAction}
        >
            {text}
        </button>
    );
};

export default Button;
