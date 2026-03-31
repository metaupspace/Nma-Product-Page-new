"use client";

import Marquee from "@/components/magicui/MarqueeWrapper";
import SectionHeader from "@/components/SectionHeader";
import React, { useEffect, useState } from "react";
import { BlogCard } from "@/components/cards/BlogCard";
import MediaCoverageCard from "@/components/cards/MediaConverageCard";
import PressReleaseCard from "@/components/cards/PressReleaseCard";
import GradientText from "@/components/GradientText";
import {
  getFeaturedBlogsForInsights,
  InsightContent,
} from "@/services/latestInsightService";
import Link from "next/link";

interface LatestInsightsProps {
  title?: React.ReactNode;
  className?: string;
}

// LatestInsights Loading Skeleton
const LatestInsightsLoadingSkeleton = ({
  title,
  className = "",
}: LatestInsightsProps) => {
  const defaultTitle = (
    <>
      Latest<GradientText> Insights</GradientText>
    </>
  );

  return (
    <section
      id="latestinsights"
      className={`relative py-16 mx-auto md:max-w-5xl overflow-hidden ${className}`}
    >
      <div className="relative z-20 space-y-8">
        <SectionHeader
          className="text-black dark:text-white"
          title={title || defaultTitle}
          separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        />

        {/* Skeleton Mixed Cards */}
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-6 overflow-hidden">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 w-80"
              >
                {/* Image skeleton */}
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// LatestInsights Error State
const LatestInsightsErrorState = ({
  title,
  className = "",
}: LatestInsightsProps) => {
  const defaultTitle = (
    <>
      Latest<GradientText> Insights</GradientText>
    </>
  );

  return (
    <section
      id="latestinsights"
      className={`relative py-16 overflow-hidden ${className}`}
    >
      <div className="relative md:max-w-5xl xl:max-w-7xl z-20 space-y-8">
        <SectionHeader
          className="text-black dark:text-white"
          title={title || defaultTitle}
          separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        />

        <div className="px-4 mx-auto md:px-0">
          <div className="max-w-2xl p-12 mx-auto text-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <p className="text-lg font-semibold text-red-500">
              Failed to load insights
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Please try again later
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LatestInsights: React.FC<LatestInsightsProps> = ({
  title,
  className = "",
}) => {
  const [insights, setInsights] = useState<InsightContent[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInsights() {
      try {
        setLoading(true);
        setError(null);
        const insights = await getFeaturedBlogsForInsights();
        setInsights(insights);
      } catch (err) {
        console.error("Error fetching insights:", err);
        setError("Failed to load insights");
      } finally {
        setLoading(false);
      }
    }
    fetchInsights();
  }, []);

  const defaultTitle = (
    <>
      Latest<GradientText> Insights</GradientText>
    </>
  );

  // Show loading skeleton
  if (loading) {
    return (
      <LatestInsightsLoadingSkeleton title={title} className={className} />
    );
  }

  // Show error state
  if (error) {
    return <LatestInsightsErrorState title={title} className={className} />;
  }

  return (
    <section
      id="latestinsights"
      className={`relative mx-auto bg-black py-16 overflow-hidden ${className}`}
    >
      {/* Content with highest z-index */}
      <div className="z-20 space-y-8">
        <SectionHeader
          className="text-black dark:text-white"
          title={title || defaultTitle}
          separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        />
        <Marquee pauseOnHover className="md:max-w-5xl xl:max-w-7xl mx-auto [--duration:20s]">
          {insights?.map((insight) => (
            <div key={insight.documentId} className="px-3">
              <InsightCard content={insight} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default LatestInsights;

interface LatestInsightsProps {
  insights?: InsightContent[];
  title?: React.ReactNode;
  className?: string;
}

// Card renderer component
const InsightCard: React.FC<{ content: InsightContent }> = ({ content }) => {
  switch (content.type) {
    case "blog":
      return (
        <Link key={content.documentId} href={`/blog/${content.documentId}`}>
          <BlogCard title={content.title} images={content.images} />
        </Link>
      );

    case "media-coverage":
      return (
        <div className={`min-w-[350px]`}>
          <MediaCoverageCard
            title={content.title}
            description={content.description}
            releaseDate={content.releaseDate}
            readMoreLink={content.readMoreLink}
          />
        </div>
      );

    case "press-release":
      return (
        <div className={`min-w-[400px]`}>
          <PressReleaseCard
            title={content.title}
            description={content.description}
            releaseDate={content.releaseDate}
            readMoreLink={content.readMoreLink}
          />
        </div>
      );

    default:
      return null;
  }
};
