import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ResourceSection } from "./ResourceList";
import CaseStudyCard from "@/components/cards/CaseStudyCard";
import PastEventCard from "@/components/cards/PastEventCard";
import { useEffect, useState } from "react";
import { fetchFromStrapi } from "@/lib/strapi";
import { PastEvent } from "@/types/strapi/pastEvent";
import { CaseStudy } from "@/types/strapi/caseStudy";
import Clarity from "@microsoft/clarity";
// Section Components
const ExpandableSection = ({
  item,
  isOpen,
  onToggle,
}: {
  item: ResourceSection;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const renderGrid = () => {
    switch (item.id) {
      case 1: // Case Studies
        return <CaseStudyGrid />;
      case 4: // Events & Webinars
        return <EventGrid />;
      default:
        return <CaseStudyGrid />;
    }
  };

  const handleClick = () => {
    if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_click_${item.title}`);
    }
    onToggle();
  };

  return (
    <div className="bg-blue-vertical p-[2px] pb-[4px] rounded-md">
      <div className="w-full overflow-hidden bg-white rounded-md dark:bg-black">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="space-y-2">
                <h3 className="text-xl font-medium transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="ml-4">
              <button
                onClick={handleClick}
                aria-label={`${isOpen ? "Hide" : "Show"} ${item.title} details`}
                className="p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronDown
                  className={cn(
                    "transition-transform duration-200 w-5 h-5",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800">
            <div className="pt-6">{renderGrid()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Grid Components
const CaseStudyGrid = () => {
  const [strapiData, setStrapiData] = useState<CaseStudy[]>([]);
  useEffect(() => {
    const fatch = async () => {
      try {
        // Try different populate formats - start with * to get all relations
        const data = await fetchFromStrapi("case-studies", {
          populate: "*",
          sort: "createdAt:desc",
        });

        if (data && Array.isArray(data)) {
          setStrapiData(data);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setStrapiData([]);
      }
    };
    fatch();
  }, []);

  return (
    <>
      {/* Mobile: Vertical scrolling grid */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-4">
          {strapiData.map((resource) => (
            <CaseStudyCard key={resource.Id} resource={resource} />
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal scrolling */}
      <div className="hidden md:block">
        <div className="pb-2 overflow-x-auto">
          <div className="flex items-center justify-center gap-6 min-w-max">
            {/* Coming Soon Placeholder */}
            <div className="flex-shrink-0 w-80">
              <div className="relative text-center z-10 bg-white dark:bg-black shadow-lg h-[250px] rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-800">
                <div className="space-y-3 px-6">
                  <div className="text-2xl text-gray-600 dark:text-gray-400">Coming Soon</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                    Imagine your name and story here. We're working hard to make it happen!
                  </div>
                </div>
              </div>
            </div>

            {/* {strapiData.map((resource) => (
        <div key={resource.Id} className="flex-shrink-0 w-80">
          <CaseStudyCard key={resource.Id} resource={resource} />
        </div>
      ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

const EventGrid = () => {
  const [strapiData, setStrapiData] = useState<PastEvent[]>([]);
  useEffect(() => {
    const fatch = async () => {
      try {
        // Try different populate formats - start with * to get all relations
        const data = await fetchFromStrapi("event-and-webinars", {
          populate: "*",
          sort: "createdAt:desc",
        });

        if (data && Array.isArray(data)) {
          setStrapiData(data);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
        setStrapiData([]);
      }
    };
    fatch();
  }, []);

  return (
    <>
      {/* Mobile: Vertical scrolling grid */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-4">
          {strapiData.map((resource) => (
            <PastEventCard key={resource.Id} resource={resource} />
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal scrolling */}
      <div className="hidden md:block">
        <div className="pb-2 overflow-x-auto">
          <div className="flex items-center justify-center gap-6 min-w-max">
            {strapiData.map((resource) => (
              <div key={resource.Id} className="flex-shrink-0 w-80">
                <PastEventCard key={resource.Id} resource={resource} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpandableSection;
