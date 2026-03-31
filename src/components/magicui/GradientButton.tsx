import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useEffect } from "react";

// AnimatedGradientText component
export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"span"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#00D5FF",
  colorTo = "#006FFF",
  ...props
}: AnimatedGradientTextProps) {
  const animationDuration = speed * 3;

  return (
    <span
      className={cn(
        "inline bg-clip-text text-transparent font-medium",
        className,
      )}
      style={{
        background: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
        backgroundSize: "200% 200%",
        animation: `gradientMove ${animationDuration}s ease-in-out infinite`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      {...props}
    >
      {children}
    </span>
  );
}

// AnimatedGradientButton component
interface AnimatedGradientButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientButton = ({
  children,
  className,
  ...props
}: AnimatedGradientButtonProps) => {

  useEffect(() => {
    // Create and inject CSS keyframes for animations
    const styleId = 'gradient-button-styles';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
      @keyframes gradientShift {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      @keyframes gradientMove {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
    `;
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{
        y: -2,
        boxShadow: "0px 8px 24px rgba(0, 213, 255, 0.3)",
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      className="relative inline-block p-[2px] rounded-lg overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #00D5FF, #006FFF, #8B5CF6, #EC4899, #F59E0B, #00D5FF)',
        backgroundSize: '300% 300%',
        animation: 'gradientShift 3s ease infinite',
      }}
    >
      <button
        className={cn(
          "relative bg-white dark:bg-black px-4 py-2 rounded-[6px] w-full text-black dark:text-white font-medium transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-900",
          className
        )}
        {...props}
      >
        <AnimatedGradientText>{children}</AnimatedGradientText>
      </button>
    </motion.div>
  );
};

export default AnimatedGradientButton;