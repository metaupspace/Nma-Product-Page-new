import React from "react";
import clsx from "clsx"; // Optional: for merging class names

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className }) => {
  return (
    <span
      className={clsx(
        "bg-gradient-to-b from-[#00D5FF] to-[#006FFF] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
