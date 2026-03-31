import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { LogOut, User } from 'lucide-react';
import { signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

interface ProfileDropdownProps {
    session: Session;
}

export function ProfileDropdown({ session }: ProfileDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleLogout = () => {
        signOut()
        setIsDropdownOpen(false)
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Profile menu"
            >
                {session?.user?.image ? (
                    <Image
                        src={session.user.image}
                        alt={session.user.name || 'Profile'}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                ) : (
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1">
                        <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                            <p className="font-medium">{session?.user?.name || 'User'}</p>
                            <p className="text-gray-500 dark:text-gray-400 truncate">{session?.user?.email}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
