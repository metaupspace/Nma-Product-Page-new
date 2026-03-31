import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      ref={ref}
      className={`relative w-auto cursor-pointer overflow-hidden rounded-full border p-1 px-4 text-center font-semibold ${className || ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full bg-brand-blue transition-all duration-300 ${isHovered ? 'scale-[100.8]' : ''
            }`}
        ></span>
        <span
          className={`inline-block text-sm text-primary-blue transition-all duration-300 ${isHovered ? 'translate-x-10 opacity-0' : ''
            }`}
        >
          {children}
        </span>
      </span>
      <span
        className={`absolute text-sm dark:text-white top-0 z-10 flex items-center justify-center w-full h-full gap-2 transition-all duration-300 text-primary-foreground ${isHovered
            ? '-translate-x-3 opacity-100 bg-brand-blue'
            : 'translate-x-12 opacity-0'
          }`}
      >
        <span>{children}</span>
        <ArrowRight size={16} />
      </span>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";