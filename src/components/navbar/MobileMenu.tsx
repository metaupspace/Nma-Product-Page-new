import React from 'react';
import clsx from 'clsx';
// import { DarkModeToggle } from './DarkModeToggle';
import { MobileNavigationLinks } from './MobileNavigationLinks';
// import { MobileAuthActions } from './MobileAuthActions';
import { Mail } from 'lucide-react';
import type { Session } from 'next-auth';

interface MobileMenuProps {
    isOpen: boolean;
    isDark: boolean;
    toggleDarkMode: () => void;
    session: Session | null;
    status: 'loading' | 'authenticated' | 'unauthenticated';
    onLoginClick: () => void;
    onContactClick: () => void;
    onMenuClose: () => void;
}

export function MobileMenu({
    isOpen,
    // isDark,
    // toggleDarkMode,
    // session,
    // status,
    // onLoginClick,
    onContactClick,
    onMenuClose
}: MobileMenuProps) {
    const handleContactClick = () => {
        onContactClick();
        onMenuClose();
    };

    return (
        <div className={clsx(
            "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
            <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                {/* Mobile Navigation Links with Dynamic Height */}
                <MobileNavigationLinks onLinkClick={onMenuClose} />

                {/* Contact Us Button */}
                <div className="px-4">
                    <button
                        onClick={handleContactClick}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    >
                        <Mail size={20} />
                        <span className="font-medium">Contact Us</span>
                    </button>
                </div>

                {/* Mobile Actions */}
                {/* <div className="flex items-center justify-between px-4 py-3 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                        <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
                    </div>
                </div> */}

                {/* <MobileAuthActions
                    session={session}
                    status={status}
                    onLoginClick={onLoginClick}
                    onMenuClose={onMenuClose}
                /> */}
            </div>
        </div>
    )
}