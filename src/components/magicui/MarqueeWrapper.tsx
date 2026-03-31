import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef, useEffect, useRef, useState, useLayoutEffect } from "react";

// Extend CSSProperties to include CSS custom properties
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  forceMarquee?: boolean;
  debug?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  forceMarquee = false,
  debug = false,
  ...props
}) => {
  // ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [shouldMarquee, setShouldMarquee] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ container: 0, content: 0 });
  const uniqueId = React.useId().replace(/:/g, '');

  const checkOverflow = () => {
    if (!containerRef.current || !measureRef.current) return;

    const container = containerRef.current;
    const measurer = measureRef.current;

    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const measurerRect = measurer.getBoundingClientRect();

    let containerSize: number;
    let contentSize: number;

    if (vertical) {
      containerSize = containerRect.height;
      contentSize = measurerRect.height;
    } else {
      containerSize = containerRect.width;
      contentSize = measurerRect.width;
    }

    setDimensions({ container: containerSize, content: contentSize });
    const needsMarquee = contentSize > containerSize;
    setShouldMarquee(needsMarquee);

    if (debug) {
      console.log('Marquee overflow check:', {
        containerSize,
        contentSize,
        needsMarquee,
        vertical,
        containerRect,
        measurerRect
      });
    }
  };

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Wait a bit for DOM to settle
    const timer = setTimeout(checkOverflow, 100);

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(checkOverflow, 50);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const handleResize = () => {
      setTimeout(checkOverflow, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [children, vertical, isClient, checkOverflow]);

  const isMarqueeActive = forceMarquee || shouldMarquee;

  // Don't render anything on server-side or before client hydration
  if (!isClient) {
    return <div className="opacity-0" />;
  }

  return (
    <div className="relative">
      <style>
        {`
          @keyframes marquee-${uniqueId} {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          @keyframes marquee-vertical-${uniqueId} {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-100%);
            }
          }
          
          .marquee-item-${uniqueId} {
            animation: marquee-${uniqueId} var(--duration, 20s) linear infinite;
          }
          
          .marquee-item-vertical-${uniqueId} {
            animation: marquee-vertical-${uniqueId} var(--duration, 20s) linear infinite;
          }
          
          .marquee-container-${uniqueId}:hover .marquee-item-${uniqueId}.pause-hover,
          .marquee-container-${uniqueId}:hover .marquee-item-vertical-${uniqueId}.pause-hover {
            animation-play-state: paused;
          }
          
          .marquee-item-${uniqueId}.reverse,
          .marquee-item-vertical-${uniqueId}.reverse {
            animation-direction: reverse;
          }
        `}
      </style>

      {/* Hidden measurer - always present to measure content */}
      <div
        ref={measureRef}
        className="fixed opacity-0 pointer-events-none"
        style={{
          // Copy exact same styles as visible content
          '--gap': props.style?.['--gap'] || '1rem',
          gap: 'var(--gap)',
          // Position completely outside viewport for accurate measurement
          top: '-9999px',
          left: '-9999px',
          width: 'auto',
          height: 'auto',
          display: 'flex',
          flexDirection: vertical ? 'column' : 'row',
          flexWrap: 'nowrap',
          flexShrink: 0,
          justifyContent: 'center', // Changed from 'space-around' to 'center'
          zIndex: -1,
        }}
        aria-hidden="true"
      >
        {children}
      </div>

      {debug && (
        <div className="absolute top-0 left-0 bg-black text-white text-xs p-2 z-50 rounded max-w-xs">
          <div>Container: {dimensions.container.toFixed(1)}px</div>
          <div>Content: {dimensions.content.toFixed(1)}px</div>
          <div>Difference: {(dimensions.content - dimensions.container).toFixed(1)}px</div>
          <div>Threshold: 50px</div>
          <div>Active: {isMarqueeActive.toString()}</div>
          <div>Should: {shouldMarquee.toString()}</div>
          <div>Force: {forceMarquee.toString()}</div>
        </div>
      )}

      <div
        ref={containerRef}
        {...props}
        className={cn(
          `marquee-container-${uniqueId} flex`,
          {
            "flex-row": !vertical,
            "flex-col": vertical,
            "overflow-hidden": isMarqueeActive,
            "justify-center": !isMarqueeActive, // Center when marquee is not active
          },
          className,
        )}
        style={{
          ...props.style,
          '--duration': props.style?.['--duration'] || '20s',
          '--gap': props.style?.['--gap'] || '1rem',
          gap: 'var(--gap)',
        }}
      >
        {isMarqueeActive ? (
          Array(Math.max(repeat, 2))
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={cn("flex shrink-0", {
                  [`marquee-item-${uniqueId}`]: !vertical,
                  [`marquee-item-vertical-${uniqueId}`]: vertical,
                  "flex-row": !vertical,
                  "flex-col": vertical,
                  "pause-hover": pauseOnHover,
                  "reverse": reverse,
                  "justify-center": true, // Center the items within each marquee segment
                })}
                style={{
                  gap: 'var(--gap)',
                }}
              >
                {children}
              </div>
            ))
        ) : (
          <div
            className={cn("flex shrink-0 container mx-auto", {
              "flex-row": !vertical,
              "flex-col": vertical,
              "justify-center": true, // Center when marquee is not active
            })}
            style={{
              gap: 'var(--gap)',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Marquee;