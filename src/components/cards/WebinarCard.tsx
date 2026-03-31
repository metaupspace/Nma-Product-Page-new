import { Webinar } from "@/types/strapi/webinar";
import { ShinyButton } from "../magicui/ShinyButton";
import Link from "next/link";
import { format } from "date-fns/format";
import LinkButton from "../buttons/LinkButton";

const WebinarCard: React.FC<Webinar> = ({ title, location, date, time, bookingLink }) => {
    return (
        <div className="group bg-blue-vertical p-[3px] w-80 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="h-full bg-white dark:bg-gray-900 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl overflow-hidden">
                <div className="p-6 flex flex-col h-full">
                    {/* Date Badge */}
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                            {format(new Date(date), 'MMM dd, yyyy')}
                        </span>
                    </div>

                    {/* Content Container - grows to fill space */}
                    <div className="flex-grow space-y-4">
                        {/* Webinar Title */}
                        <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                            {title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                                {location}
                            </p>
                        </div>

                        {/* Time - if available */}
                        {time && (
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                    {typeof time === 'string' ? time : format(new Date(time), "h:mm aa")}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Action Button - always at bottom */}
                    <div className="mt-6 pt-4">
                        <LinkButton
                            href={bookingLink}
                            className="w-full justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200"
                        >
                            Book now
                        </LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebinarCard;