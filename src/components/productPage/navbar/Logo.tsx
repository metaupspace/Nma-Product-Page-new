import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
    return (
        <Link
            href="/productPage"
            className="cursor-pointer flex items-center gap-3 flex-shrink-0"
        >
            <div className='flex items-center gap-3'>
                <Image
                src="/assets/productPage/cslogo.png"
                alt="convosynth logo"
                width={200}
                height={200}
                className="h-8 w-auto"
            />
            </div>
        </Link>
    )
}
