import React from 'react';
import Image from 'next/image';
import { LogOut, User } from 'lucide-react';
import { signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

interface MobileAuthActionsProps {
    session: Session | null;
    status: 'loading' | 'authenticated' | 'unauthenticated';
    onLoginClick: () => void;
    onMenuClose: () => void;
}

export function MobileAuthActions({ session, status, onLoginClick, onMenuClose }: MobileAuthActionsProps) {
    const handleMobileLogout = () => {
        signOut()
        onMenuClose()
    }

    return (
        <div className="flex items-center justify-between px-4 py-3 mt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
                {/* Mobile Profile Info (when logged in) */}
                {status === 'authenticated' && session && (
                    <div className="flex items-center space-x-2">
                        {session?.user?.image ? (
                            <Image
                                src={session.user.image}
                                alt={session.user.name || 'Profile'}
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </div>
                        )}
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {session.user?.name || 'User'}
                        </span>
                    </div>
                )}
            </div>

            {/* Mobile Login/Logout Button */}
            {status === 'authenticated' && session ? (
                <button
                    onClick={handleMobileLogout}
                    className='flex items-center space-x-2 rounded-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-200'
                >
                    <LogOut className="w-4 h-4" />
                    <span>Sign out</span>
                </button>
            ) : (
                <button
                    onClick={onLoginClick}
                    className='rounded-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200'
                >
                    Log in
                </button>
            )}
        </div>
    )
}