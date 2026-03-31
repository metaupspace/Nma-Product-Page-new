import Image, { StaticImageData } from 'next/image';
import React from 'react'

export interface WhatDrivesUsCardProp {
    id: number;
    image: StaticImageData;
    title: string;
    description: any;
}

const WhatDrivesUsCard: React.FC<WhatDrivesUsCardProp> = (
    {
        id,
        image,
        title,
        description
    }
) => {
    return (
        <div key={id} className="relative flip-card w-full h-80">
            <div className="flip-card-inner relative h-full w-full transition-transform duration-700">
                <div className="relative h-full bg-blue-vertical p-[3px] rounded-md w-full">
                    <div className="bg-white dark:bg-black text-center shadow-md rounded-md p-6 w-full h-full flex flex-col justify-center">
                        <Image
                            src={image}
                            width={180}
                            height={200}
                            alt={title}
                            className="mx-auto w-full h-[200px] object-contain mb-4"
                        />
                        <h3 className="font-medium text-xl">{title}</h3>
                    </div>
                </div>
                <div className="flip-card-back absolute inset-0 p-8 bg-brand-dark-blue rounded-lg flex items-center justify-center">
                    <h3 className="text-white text-xl">{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default WhatDrivesUsCard
