import { Event } from "@/types/strapi/event";
// import Link from "next/link";
// import { ShinyButton } from "../magicui/ShinyButton";
import { format } from "date-fns/format";
import LinkButton from "../buttons/LinkButton";
import Clarity from "@microsoft/clarity";
const EventCard: React.FC<Event> = ({ title, location, date, bookingLink }) => {
  const handleClick = () => {
   if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_click_${title}`);
    }
  };

  return (
    <div className="group bg-blue-vertical p-[3px] w-80 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="h-full overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md dark:bg-gray-900 group-hover:shadow-xl">
        <div className="flex flex-col h-full p-6">
          {/* Date Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full dark:text-blue-300 dark:bg-blue-900/50">
              {format(new Date(date), "MMM dd, yyyy")}
            </span>
          </div>

          {/* Content Container - grows to fill space */}
          <div className="flex-grow space-y-4">
            {/* Event Title */}
            <h3 className="text-lg font-bold leading-tight text-gray-900 transition-colors duration-200 dark:text-white line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-blue-300">
              {title}
            </h3>

            {/* Location */}
            <div className="flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {location}
              </p>
            </div>

            {/* Time */}
            <div className="flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {format(new Date(date), "h:mm aa")}
              </span>
            </div>
          </div>

          {/* Action Button - always at bottom */}
          <div onClick={handleClick} className="pt-4 mt-6">
            <LinkButton
              href={bookingLink}
              className="justify-center w-full transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white"
            >
              Book now
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
