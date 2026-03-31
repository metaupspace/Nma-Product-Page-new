import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface LinkButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    disabled?: boolean;
}

const LinkButton: React.FC<LinkButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
    children = "Watch Online",
    onClick,
    href,
    className = "",
    disabled = false,
    ...props
}) => {
    const baseClasses: string = `relative inline-block p-[2px] rounded-md bg-blue-vertical transition-all duration-300 group`;

    const innerClasses: string = `px-4 py-1 bg-white dark:bg-black rounded-md text-brand-blue dark:text-brand-cyan font-semibold text-md transition-colors duration-300`;

    if (href) {
        return (
            <Link
                href={href}
                className={`${baseClasses} ${className}`}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                <span className={cn("flex items-center justify-center gap-3", innerClasses)}>
                    {children}
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>
        );
    }

    return (
        <button
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={`${baseClasses} ${className}`}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            <span className={cn("flex items-center justify-center gap-3", innerClasses)}>
                {children}
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </span>
        </button>
    );
};

export default LinkButton