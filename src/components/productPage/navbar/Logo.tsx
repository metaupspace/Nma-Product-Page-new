import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
    return (
        <Link
            href="/"
            className="cursor-pointer flex items-center gap-3 flex-shrink-0"
        >
            <div className='flex items-center gap-3'>
                <Image
                src="/assets/productPage/logo.png"
                alt="Neural Mind Atlas"
                width={400}
                height={400}
                className="h-8 w-auto hidden dark:block"
            />
            <span className="text-[30px] leading-none text-white tracking-tight px-1 font-semibold">CS</span>

            </div>

        </Link>
    )
}
