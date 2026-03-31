import Link from "next/link";
import LinkButton from "../buttons/LinkButton";
import { PastEvent } from "@/types/strapi/pastEvent";
import { format } from "date-fns/format";

const PastEventCard = ({ resource }: { resource: PastEvent }) => (
    <div className="bg-blue-vertical p-[2px] rounded-md">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4 space-y-3">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {format(new Date(resource.releaseDate), 'MMM dd, yyyy')}
                </div>
                <h4 className="font-medium text-base lg:text-lg leading-tight">
                    {resource.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {resource.description}
                </p>

                <div className="pt-2 flex items-center gap-3">
                     <LinkButton href="#">
                        Watch online
                    </LinkButton>
                </div>
            </div>
        </div>
    </div>
);

export default PastEventCard;