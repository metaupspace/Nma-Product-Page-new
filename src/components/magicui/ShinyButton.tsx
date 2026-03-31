"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import React from "react";
import Clarity from "@microsoft/clarity";
interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  
  const handleClick = () => {
    if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_click_${children}`);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      ref={ref}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        y: -2,
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)", // smooth shadow
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      className={cn(
        "relative overflow-hidden px-8 py-2 rounded-md font-semibold bg-brand-blue text-white hover:shadow:lg",
        className
      )}
      {...props}
    >
      {/* Shine overlay */}
      <motion.span
        className="absolute inset-0 w-full h-full opacity-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ["-100%", "100%"], opacity: [0, 0.5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
          transform: "translateX(var(--x))",
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
