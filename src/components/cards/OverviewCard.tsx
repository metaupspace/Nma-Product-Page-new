import Image, { StaticImageData } from "next/image";
import Clarity from "@microsoft/clarity";
interface CardProps {
  title: any;
  imageSrc: StaticImageData;
  description: string;
}

const OverviewCard: React.FC<Omit<CardProps, "link">> = ({
  title,
  imageSrc,
  description,
}) => {
  
  const handleHover = (title: string) => {
    if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_hover_${title}`);
    }
  };
  
  return (
    <div
      onMouseEnter={() => handleHover(title)}
      className="relative w-full h-contain group"
    >
      {/* Main Card */}
      <div className="bg-blue-vertical w-full shadow-md p-[3px] pb-[4px] rounded-md group-hover:rounded-b-none transition-all duration-300">
        <div className="flex flex-col items-center justify-around w-full h-full p-4 space-y-2 text-center transition-all duration-200 bg-white rounded-md dark:bg-black group-hover:bg-transparent">
          <div className="flex justify-center p-4 rounded-md">
            <Image
              src={imageSrc}
              alt={title}
              className="object-contain transition-all duration-500 h-60 group-hover:scale-110 group-hover:brightness-110"
            />
          </div>
          <p className="mt-4 text-xl font-medium transition-colors duration-200 black group-hover:text-white">
            {title}
          </p>
        </div>
      </div>

      {/* Description that expands from bottom - positioned absolutely */}

      <div className="absolute left-0 right-0 z-10 top-full">
        <div className="px-4 pb-4 text-white transition-all duration-500 ease-out delay-100 transform -translate-y-full shadow-xl opacity-0 bg-brand-blue rounded-b-md group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
