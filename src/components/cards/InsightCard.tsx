import { InsightContent } from "@/services/latestInsightService";
import { BlogCard } from "./BlogCard";
import MediaCoverageCard from "./MediaConverageCard";
import PressReleaseCard from "./PressReleaseCard";

// Card renderer component
const InsightCard: React.FC<{ content: InsightContent }> = ({ content }) => {
  const baseClasses = "hover:scale-105 transition duration-500";

  switch (content.type) {
    case 'blog':
      return (
        <div className={`${baseClasses} min-w-[300px]`}>
          <BlogCard
            title={content.title}
            images={content.images}
          />
        </div>
      );

    case 'media-coverage':
      return (
        <div className={`${baseClasses} min-w-[350px]`}>
          <MediaCoverageCard
            title={content.title}
            description={content.description}
            releaseDate={content.releaseDate}
            readMoreLink={content.readMoreLink}
          />
        </div>
      );

    case 'press-release':
      return (
        <div className={`${baseClasses} min-w-[400px]`}>
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

export default InsightCard