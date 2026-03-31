import EventCard from "@/components/cards/EventCard";
import Marquee from "@/components/magicui/MarqueeWrapper";
import SectionHeader from "@/components/SectionHeader";
import { fetchFromStrapi } from "@/lib/strapi";
import { Event } from "@/types/strapi/event";
import React, { useEffect, useState } from "react";

// Events Loading Skeleton
const EventsLoadingSkeleton = () => {
  return (
    <section id="events" className="max-w-7xl mx-auto space-y-12 py-16">
      <SectionHeader
        title="Events"
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        description={
          <>
            Join us at global industry conferences, investor summits, and
            domain-specific events across healthcare, biotech, private equity, and
            AI. <br /> Let&apos;s connect, collaborate, and co-create
          </>
        }
      />

      {/* Skeleton Events Cards */}
      <div className="flex gap-6 justify-center">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="group bg-blue-vertical p-[3px] w-80 rounded-xl flex-shrink-0">
            <div className="h-full bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="p-6 flex flex-col h-full">
                {/* Date Badge Skeleton */}
                <div className="mb-4">
                  <div className="w-24 h-6 bg-blue-100 dark:bg-blue-900/50 rounded-full animate-pulse"></div>
                </div>

                {/* Content max-w-7xl */}
                <div className="flex-grow space-y-4">
                  {/* Event Title Skeleton */}
                  <div className="space-y-2">
                    <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="w-3/4 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>

                  {/* Location Skeleton */}
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse flex-shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-4/5 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>

                  {/* Time Skeleton */}
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse flex-shrink-0"></div>
                    <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Action Button Skeleton */}
                <div className="mt-6 pt-4">
                  <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Events Error State
const EventsErrorState = ({ error }: { error: string }) => {
  return (
    <section id="events" className="max-w-7xl mx-auto space-y-12 py-16">
      <SectionHeader
        title="Events"
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        description={
          <>
            Join us at global industry conferences, investor summits, and
            domain-specific events across healthcare, biotech, private equity, and
            AI. <br /> Let&apos;s connect, collaborate, and co-create
          </>
        }
      />

      <div className="text-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-12 shadow-lg max-w-2xl mx-auto">
          <p className="text-red-500 text-lg font-semibold">{error}</p>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Please try again later</p>
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const [strapiData, setStrapiData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fatch = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try different populate formats - start with * to get all relations
        const data = await fetchFromStrapi('events', {
          populate: '*',
          sort: 'createdAt:desc',
        });

        if (data && Array.isArray(data)) {
          setStrapiData(data)
        }

      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events');
        setStrapiData([]);
      } finally {
        setLoading(false);
      }
    };
    fatch();
  }, []);

  // Show loading skeleton
  if (loading) {
    return <EventsLoadingSkeleton />;
  }

  // Show error state
  if (error) {
    return <EventsErrorState error={error} />;
  }

  return (
    <section id="events" className="max-w-7xl mx-auto space-y-12 py-16">
      <SectionHeader
        title="Events"
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        description={
          <>
            Join us at global industry conferences, investor summits, and
            domain-specific events across healthcare, biotech, private equity, and
            AI. <br /> Let&apos;s connect, collaborate, and co-create
          </>
        }
      />

      <Marquee pauseOnHover className="max-w-7xl mx-auto">
        {strapiData.map((item) => (
          <EventCard key={item.documentId} {...item} />
        ))}
      </Marquee>
    </section>
  );
};

export default Events;