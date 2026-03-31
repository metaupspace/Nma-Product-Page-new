import React from 'react';
import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';

interface DarkModeToggleProps {
    isDark: boolean;
    toggleDarkMode: () => void;
    className?: string;
}

export function DarkModeToggle({ isDark, toggleDarkMode, className = "" }: DarkModeToggleProps) {
    return (
        <button
            onClick={toggleDarkMode}
            className={clsx(
                "p-2 rounded-full transition-colors duration-200",
                "hover:bg-gray-100 dark:hover:bg-gray-700",
                "focus:outline-none focus:ring-2 focus:ring-blue-500",
                className
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                <Moon className='text-yellow-500' />
            ) : (
                <Sun />
            )}
        </button>
    )
}
