"use client";

import React, { useState } from "react";

type PositionObject = {
  readonly top?: string;
  readonly left?: string;
  readonly right?: string;
  readonly bottom?: string;
  readonly transform?: string;
};
type Props = {
  text: string;
  position: string | PositionObject;
};

export default function FloatingButton({ text, position }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const isStringPos = typeof position === "string";
  const posObj = !isStringPos ? (position as PositionObject) : undefined;
  const driftDistance = 10;
  const hoverTilt = "rotateX(14deg) rotateY(-14deg) translateZ(6px)";

  const anchorStyle: React.CSSProperties | undefined = posObj
    ? {
        ...posObj,
      }
    : undefined;

  const driftStyle: React.CSSProperties = {
    animation: isHovered ? "none" : "floatX 2.4s ease-in-out infinite alternate",
    transform: isHovered ? "translateX(0)" : undefined,
  };

  const buttonStyle: React.CSSProperties = {
    transform: isHovered ? hoverTilt : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
    transformStyle: "preserve-3d",
    perspective: "1000px",
  };

  return (
    <div
      className={`absolute ${isStringPos ? (position as string) : ""} pointer-events-auto transition-transform duration-300 ease-out z-20`}
      style={anchorStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="transition-transform duration-300 ease-out" style={driftStyle}>
        <button
          style={buttonStyle}
          className="bg-white/95 hover:bg-white text-black px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap shadow-lg border-b-[3px] border-b-black transition-transform duration-300"
        >
          {text}
        </button>
      </div>

      <style jsx>{`
        @keyframes floatX {
          0% {
            transform: translateX(-${driftDistance}px);
          }
          100% {
            transform: translateX(${driftDistance}px);
          }
        }
      `}</style>
    </div>
  );
}
