import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import PressReleaseCard from "@/components/cards/PressReleaseCard";
import { fetchFromStrapi } from "@/lib/strapi";
import { PressRelease } from "@/types/strapi/pressRelease";

// PressReleases Loading Skeleton
const PressReleasesLoadingSkeleton = () => {
  return (
    <section id="pressreleases" className="relative bg-brand-indigo dark:bg-black py-16 space-y-8">
      <SectionHeader
        title="Media Announcements"
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        description={
          <>
            Get real-time updates on our milestones, strategic
            partnerships, AI product launches, funding rounds, and industry
            breakthroughs. We lead with impact—see what&apos;s making
            headlines.
          </>
        }
      />

      {/* Skeleton Press Release Cards */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className="flex gap-6 overflow-hidden">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="group p-1 w-80 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex-shrink-0">
              <div className="relative h-full p-8 overflow-hidden text-white bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-lg">
                <div className="flex flex-col h-full">
                  {/* Date Badge Skeleton */}
                  <div className="mb-6">
                    <div className="w-24 h-6 bg-blue-500/30 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content max-w-7xl */}
                  <div className="flex-grow space-y-4">
                    {/* Title Skeleton */}
                    <div className="space-y-2">
                      <div className="w-full h-6 bg-white/20 rounded animate-pulse"></div>
                      <div className="w-3/4 h-6 bg-white/15 rounded animate-pulse"></div>
                    </div>

                    {/* Description Skeleton */}
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-blue-100/20 rounded animate-pulse"></div>
                      <div className="w-full h-4 bg-blue-100/15 rounded animate-pulse"></div>
                      <div className="w-5/6 h-4 bg-blue-100/15 rounded animate-pulse"></div>
                      <div className="w-2/3 h-4 bg-blue-100/10 rounded animate-pulse"></div>
                    </div>
                  </div>

                  {/* Read More Button Skeleton */}
                  <div className="mt-6 pt-4">
                    <div className="w-20 h-5 bg-white/20 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// PressReleases Error State
const PressReleasesErrorState = ({ error }: { error: string }) => {
  return (
    <section id="pressreleases" className="relative bg-brand-indigo dark:bg-black py-16 space-y-8">
      <SectionHeader
        title="Media Announcements"
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        description={
          <>
            Get real-time updates on our milestones, strategic
            partnerships, AI product launches, funding rounds, and industry
            breakthroughs. We lead with impact—see what&apos;s making
            headlines.
          </>
        }
      />

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="group p-1 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 max-w-2xl mx-auto">
          <div className="relative p-12 text-white bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-lg text-center">
            <p className="text-red-200 text-lg font-semibold">{error}</p>
            <p className="text-blue-100 mt-2">Please try again later</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PressReleasesSection: React.FC = () => {
  const [strapiData, setStrapiData] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fatch = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try different populate formats - start with * to get all relations
        const data = await fetchFromStrapi('press-releases', {
          populate: '*',
          sort: 'createdAt:desc',
        });

        if (data && Array.isArray(data)) {
          setStrapiData(data)
        }

      } catch (err) {
        console.error('Error fetching media coverage:', err);
        setError('Failed to load press releases');
        setStrapiData([]);
      } finally {
        setLoading(false);
      }
    };
    fatch();
  }, []);

  // Show loading skeleton
  if (loading) {
    return <PressReleasesLoadingSkeleton />;
  }

  // Show error state
  if (error) {
    return <PressReleasesErrorState error={error} />;
  }

  return (
    <section id="pressreleases" className="relative py-16 space-y-8">
      {/* Header */}
      <SectionHeader
        title="Media Announcements"
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        description={
          <>
            Get real-time updates on our milestones, strategic
            partnerships, AI product launches, funding rounds, and industry
            breakthroughs. We lead with impact—see what&apos;s making
            headlines.
          </>
        }
      />

      {/* Coming Soon Placeholder */}
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="group p-1 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 max-w-2xl mx-auto">
          <div className="relative p-12 text-white bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-lg text-center">
            <div className="text-2xl text-white mb-4">Coming Soon</div>
            <div className="text-blue-100 leading-relaxed">
              Press releases and media announcements will be featured here. Stay tuned for updates on our milestones, partnerships, and industry breakthroughs.
            </div>
          </div>
        </div>
      </div>

      {/* Press Release Cards - Commented out for now */}
      {/* {strapiData.map((item) => (
        <PressReleaseCard key={item.documentId} {...item} />
      ))} */}
    </section>
  );
};

export default PressReleasesSection;