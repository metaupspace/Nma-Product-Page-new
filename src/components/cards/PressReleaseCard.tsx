import { PressRelease } from "@/types/strapi/pressRelease";
import React from "react";
// import AnimatedGradientButton from '../magicui/GradientButton'
import Link from "next/link";
import { format } from "date-fns/format";
import { ArrowRight } from "lucide-react";
import Clarity from "@microsoft/clarity";

const PressReleaseCard: React.FC<PressRelease> = ({
  title,
  description,
  releaseDate,
  readMoreLink,
}) => {
    
  const handleClick = () => {
    if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_click_${title}`);
    }
  };

  return (
    <div className="group p-1 w-80 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="relative h-full p-8 overflow-hidden text-white transition-all duration-300 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 group-hover:shadow-xl">
        <div className="flex flex-col h-full">
          {/* Date Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-100 rounded-full bg-blue-500/30 backdrop-blur-sm">
              {format(new Date(releaseDate), "MMM dd, yyyy")}
            </span>
          </div>

          {/* Content Container - grows to fill space */}
          <div className="flex-grow space-y-4">
            {/* Article Title */}
            <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-200 line-clamp-3 group-hover:text-blue-100">
              {title}
            </h3>

            {/* Article Description */}
            <p className="text-sm leading-relaxed text-blue-100 line-clamp-4">
              {description}
            </p>
          </div>

          {/* Read More Button - always at bottom */}
          <div className="pt-4 mt-6">
            <Link
              onClick={handleClick}
              href={readMoreLink}
              className="inline-flex items-center gap-2 font-medium text-white transition-all duration-200 text-md group/link hover:text-blue-100"
            >
              Read more
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Subtle background pattern/effect */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-br from-blue-500/10 to-transparent group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

export default PressReleaseCard;
