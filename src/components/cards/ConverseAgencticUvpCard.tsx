import React from 'react'

export interface ConverseAgencticUvpCardProp {
    id: number;
    title: string;
    description: string;
}

const ConverseAgencticUvpCard:React.FC<ConverseAgencticUvpCardProp> = (
    {
        id,
        title,
        description
    }
) => {
    return (
        <div
            key={id}
            className='group relative bg-blue-vertical p-[2px] rounded-md overflow-visible hover:shadow-lg transition-all duration-500 mb-8 w-fit'
        >
            {/* Main card content */}
            <div className='text-center p-4 bg-white dark:bg-black rounded-md group-hover:rounded-b-none transition-all duration-500 ease-out relative z-10 whitespace-nowrap'>
                {title}
            </div>

            {/* Expanding bottom section - Shutter effect */}
            <div className='absolute left-1 right-1 top-full rounded-b-md overflow-hidden transition-all duration-500 ease-out z-0 min-w-full'>
                <div className='bg-white dark:bg-black rounded-b-md transform scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out'>
                    <div className='p-4 shadow-md rounded-md'>
                        <div className='transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200 ease-out'>
                            <p className='font-normal text-sm leading-relaxed whitespace-normal break-words max-w-xs'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConverseAgencticUvpCard
