import Image, { StaticImageData } from "next/image";
import React from "react";

type DigitalAgeWithAiCardProp = {
  id: number;
  title: string;
  description: any;
  image: StaticImageData;
}

const DigitalAgeWithAiCard: React.FC<DigitalAgeWithAiCardProp> = (
  {
    title,
    description,
    image
  }
) => {
  return (
    <div className="relative group overflow-hidden bg-blue-vertical p-[3px] rounded-xl w-full">
      <div className="h-full relative">
        <div className="h-full flex flex-col items-center gap-4 p-6 bg-white dark:bg-black rounded-lg transition-opacity duration-700 ease-in-out group-hover:opacity-0">
          <Image width={150} alt={title} src={image} />
          <h2 className="text-xl font-medium text-center">
            {title}
          </h2>
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full group-hover:translate-x-0 transition-transform opacity-0 group-hover:opacity-100 duration-700 ease-in-out p-6 text-white">
          {description}
        </div>
      </div>
    </div>
  )
}

export default DigitalAgeWithAiCard