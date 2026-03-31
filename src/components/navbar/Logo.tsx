import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import horizontal_light_logo from '../../../public/assets/brand/horizontal_light_logo.png';
// import horizontal_dark_logo from '../../../public/assets/brand/horizontal_dark_logo.png';
// import outlined_logo from "../../../public/assets/brand/outlined_logo.png"
import gradient_logo from "../../../public/assets/brand/gradient_logo.png"

export function Logo() {
    return (
        <Link
            href="/"
            className="cursor-pointer flex items-center flex-shrink-0"
        >
            <Image
                src={horizontal_light_logo}
                alt="Neural Mind Atlas"
                width={200}
                height={32}
                className="h-8 w-auto dark:hidden"
            />
            <Image
                src={gradient_logo}
                alt="Neural Mind Atlas"
                width={400}
                // height={40}
                className="h-8 w-auto hidden dark:block"
            />
        </Link>
    )
}
