import Link from 'next/link';
import React from 'react'

export interface ValuePropositionCardProp {
    id: number;
    href: string;
    title: string;
}

const ValuePropositionCard: React.FC<ValuePropositionCardProp> = (
    {
        id,
        href,
        title
    }
) => {
    return (
        <Link key={id} href={href} className="flex-1">
            <div className='bg-blue-vertical p-[3px] rounded-sm hover:scale-105 hover:shadow-md transition-all duration-300 h-full'>
                <div className='bg-white dark:bg-black text-center p-4 rounded-sm h-full flex items-center justify-center'>
                    {title}
                </div>
            </div>
        </Link>
    )
}

export default ValuePropositionCard
