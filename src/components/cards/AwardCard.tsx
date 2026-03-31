import { Award } from "lucide-react";

export interface AwardData {
    id: string;
    title: string;
    hasBadge?: boolean;
    badgeText?: string;
}

interface AwardCardProps {
    award: AwardData;
}

const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
    return (
        <div className="group bg-blue-vertical p-[3px] w-80 rounded-xl transition-all duration-300 hover:shadow-2xl">
            <div className="relative h-full bg-white dark:bg-gray-900 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl overflow-hidden">
                <div className="p-8 flex flex-col h-full">
                    {/* Badge - if available */}
                    {award.hasBadge && award.badgeText && (
                        <div className="mb-4">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                                {award.badgeText}
                            </span>
                        </div>
                    )}

                    {/* Content Container - grows to fill space */}
                    <div className="flex-grow flex flex-col justify-center items-center space-y-6">
                        {/* Trophy Icon */}
                        <div className="flex justify-center">
                            <div className="p-4 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 group-hover:from-yellow-200 group-hover:to-yellow-300 dark:group-hover:from-yellow-800/40 dark:group-hover:to-yellow-700/40 transition-all duration-300 group-hover:scale-110">
                                <Award
                                    size={48}
                                    className="text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors duration-300"
                                />
                            </div>
                        </div>

                        {/* Award Title */}
                        <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white line-clamp-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200 px-2">
                            {award.title}
                        </h3>
                    </div>

                    {/* Bottom section for visual balance */}
                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex justify-center">
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                Achievement
                            </span>
                        </div>
                    </div>
                </div>

                {/* Subtle celebration effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default AwardCard;