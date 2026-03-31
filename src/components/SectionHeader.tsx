import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: any;
  description?: any;
  className?: string;
  separatorClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className,
  separatorClassName,
}) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [lineWidth, setLineWidth] = useState<number>(0);

  useEffect(() => {
    if (headingRef.current) {
      const width = headingRef.current.offsetWidth;
      setLineWidth(width - 40); // 40px wider than heading (20px each side)
    }
  }, [title]);

  return (
    <div className={cn("container mx-auto px-6 relative text-center", className)}>
      <h1
        ref={headingRef}
        className={cn("text-3xl md:text-5xl font-semibold inline-block", className)}
      >
        {title}
      </h1>
      <div className="relative h-5 my-4">
        <div
          className={cn(
            "h-[2px] bg-seperator-gradient-dark mx-auto",
            separatorClassName
          )}
          style={{ width: `${lineWidth}px` }}
        />
      </div>
      <span className="max-w-4xl mx-auto leading-relaxed text-sm md:text-lg block">
        {description}
      </span>
    </div>
  );
};

export default SectionHeader;
