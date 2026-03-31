"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Marquee from "@/components/magicui/MarqueeWrapper";
import { fetchFromStrapi } from "@/lib/strapi";
import { MediaCoverage } from "@/types/strapi/mediaCoverage";
import MediaCoverageCard from "@/components/cards/MediaConverageCard";

// MediaCoverage Loading Skeleton
const MediaCoverageLoadingSkeleton = () => {
  return (
    <section className="relative space-y-8 py-16 bg-brand-dark-blue overflow-hidden">
      {/* Background gradients */}
      <div className="absolute left-[-1200px] top-[-500px] w-[1600px] h-[493.37px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px]" />
      <div className="absolute right-[-600px] bottom-[-500px] w-[950px] h-80 bg-green-300 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[245.80px]" />

      <SectionHeader
        className="text-white"
        title="Media Coverage"
        description="From top-tier business publications to healthcare and private equity
          media outlets, explore how we&apos;re shaping the conversation
          around AI, digital transformation, and next-gen intelligence."
        separatorClassName="bg-seperator-gradient-dark"
      />

      {/* Skeleton Media Cards */}
      <div className="md:max-w-5xl xl:max-w-7xl mx-auto">
        <div className="flex gap-6 overflow-hidden">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex-shrink-0 w-80 border border-white/20">
              {/* Logo/Image skeleton */}
              <div className="w-16 h-16 bg-white/20 rounded-lg mb-4 animate-pulse"></div>

              {/* Title skeleton */}
              <div className="space-y-2 mb-4">
                <div className="w-3/4 h-6 bg-white/20 rounded animate-pulse"></div>
                <div className="w-1/2 h-6 bg-white/15 rounded animate-pulse"></div>
              </div>

              {/* Description skeleton */}
              <div className="space-y-2 mb-4">
                <div className="w-full h-4 bg-white/15 rounded animate-pulse"></div>
                <div className="w-5/6 h-4 bg-white/15 rounded animate-pulse"></div>
                <div className="w-4/5 h-4 bg-white/15 rounded animate-pulse"></div>
              </div>

              {/* Date/Link skeleton */}
              <div className="flex justify-between items-center">
                <div className="w-20 h-4 bg-white/15 rounded animate-pulse"></div>
                <div className="w-16 h-8 bg-white/20 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// MediaCoverage Error State
const MediaCoverageErrorState = ({ error }: { error: string }) => {
  return (
    <section className="relative space-y-8 py-16 bg-brand-dark-blue overflow-hidden">
      {/* Background gradients */}
      <div className="absolute left-[-1200px] top-[-500px] w-[1600px] h-[493.37px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px]" />
      <div className="absolute right-[-600px] bottom-[-500px] w-[950px] h-80 bg-green-300 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[245.80px]" />

      <SectionHeader
        className="text-white"
        title="Media Coverage"
        description="From top-tier business publications to healthcare and private equity
          media outlets, explore how we&apos;re shaping the conversation
          around AI, digital transformation, and next-gen intelligence."
        separatorClassName="bg-seperator-gradient-dark"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-12 text-center max-w-2xl mx-auto">
          <p className="text-red-300 text-lg font-semibold">{error}</p>
          <p className="text-white/70 mt-2">Please try again later</p>
        </div>
      </div>
    </section>
  );
};

const MediaCoverageSection: React.FC = () => {
  const [strapiData, setStrapiData] = useState<MediaCoverage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fatch = async () => {
      try {
        setLoading(true);
        setError(null);
        // Try different populate formats - start with * to get all relations
        const data = await fetchFromStrapi('media-coverages', {
          populate: '*',
          sort: 'createdAt:desc',
        });

        if (data && Array.isArray(data)) {
          setStrapiData(data)
        }

      } catch (err) {
        console.error('Error fetching media coverage:', err);
        setError('Failed to load Media Coverage');
        setStrapiData([]);
      } finally {
        setLoading(false);
      }
    };
    fatch();
  }, []);

  // Show loading skeleton
  if (loading) {
    return <MediaCoverageLoadingSkeleton />;
  }

  // Show error state
  if (error) {
    return <MediaCoverageErrorState error={error} />;
  }

  return (
    <section className="relative space-y-8 py-16 bg-brand-dark-blue overflow-hidden">
      <div className="absolute left-[-1200px] top-[-500px] w-[1600px] h-[493.37px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px]" />
      <div className="absolute right-[-600px] bottom-[-500px] w-[950px] h-80 bg-green-300 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[245.80px]" />

      {/* Header */}
      <SectionHeader
        className="text-white"
        title="Media Coverage"
        description="From top-tier business publications to healthcare and private equity
            media outlets, explore how we&apos;re shaping the conversation
            around AI, digital transformation, and next-gen intelligence."
        separatorClassName="bg-seperator-gradient-dark"
      />

      {/* Media Cards */}
      <Marquee pauseOnHover className="md:max-w-5xl xl:max-w-7xl mx-auto">
        {strapiData.map((item) => (
          <MediaCoverageCard key={item.documentId} {...item} />
        ))}
      </Marquee>
    </section>
  );
};

export default MediaCoverageSection;