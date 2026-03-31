import React from 'react';
import { ShinyButton } from '../magicui/ShinyButton';
import { ProfileDropdown } from './ProfileDropdown';
import type { Session } from 'next-auth';

interface AuthActionsProps {
    session: Session | null;
    status: 'loading' | 'authenticated' | 'unauthenticated';
    onLoginClick: () => void;
}

export function AuthActions({ session, status, onLoginClick }: AuthActionsProps) {
    if (status === 'authenticated' && session) {
        return <ProfileDropdown session={session} />
    }

    return (
        <ShinyButton
            onClick={onLoginClick}
            className='rounded-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200'
        >
            Log In
        </ShinyButton>
    )
}
