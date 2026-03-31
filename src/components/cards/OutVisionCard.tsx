import Image, { StaticImageData } from 'next/image';
import React from 'react'

export interface OurVisionCardProp {
    id: number;
    title: string;
    image: StaticImageData;
}

const OurVisionCard: React.FC<OurVisionCardProp> = (
    {
        id,
        title,
        image
    }
) => {
    return (
        <div
            key={id}
            className="group relative p-[3px] w-full rounded-xl hover:p-1 hover:shadow-lg bg-blue-vertical transiton-all duration-500"
        >
            <div className="bg-white h-full dark:bg-black group-hover:bg-transparent text-center shadow-md rounded-xl p-8 w-full transition-all duration-500">
                <h4 className="text-2xl group-hover:text-white transition-all duration-500">{title}</h4>
                <Image
                    className="w-full group-hover:scale-105 transition-all duration-500"
                    src={image}
                    alt="svg_image"
                />
            </div>
        </div>
    )
}

export default OurVisionCard
