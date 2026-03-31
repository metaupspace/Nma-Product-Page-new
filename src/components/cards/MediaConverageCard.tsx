import { MediaCoverage } from "@/types/strapi/mediaCoverage";
import { format } from "date-fns/format";
import Link from "next/link";
import LinkButton from "../buttons/LinkButton";

const MediaCoverageCard = ({ title, description, releaseDate, readMoreLink }: MediaCoverage) => {
    return (
        <div className="group bg-blue-vertical p-[3px] w-80 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="h-full bg-white dark:bg-gray-900 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl overflow-hidden">
                <div className="p-6 flex flex-col h-full">
                    {/* Date Badge */}
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                            {format(new Date(releaseDate), 'MMM dd, yyyy')}
                        </span>
                    </div>

                    {/* Content Container - grows to fill space */}
                    <div className="flex-grow space-y-4">
                        {/* Article Title */}
                        <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white line-clamp-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                            {title}
                        </h3>

                        {/* Article Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                            {description}
                        </p>
                    </div>

                    {/* Action Button - always at bottom */}
                    <div className="mt-6 pt-4">
                        <LinkButton 
                            href={readMoreLink}
                            className="w-full justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200"
                        >
                            Read more
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaCoverageCard;