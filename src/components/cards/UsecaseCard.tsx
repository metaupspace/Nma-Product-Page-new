"use client";

import Image, { StaticImageData } from "next/image";
import Clarity from "@microsoft/clarity";

interface UseCaseCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  className?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  image,
  className = "",
}) => {

  const handleHover = () => {
    if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_hover_${title}`);
    }
  };

  return (
    <div
      onMouseEnter={handleHover}
      className={`bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group ${className}`}
    >
      {/* Illustration Container */}
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
        <Image src={image} alt="Use Case Illustration" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default UseCaseCard;
