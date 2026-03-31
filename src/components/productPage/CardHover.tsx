import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function CardHover({ children }: Props) {
  return (
    <div className="group relative h-full">
      <div className="relative z-10 transition-transform duration-300 h-full">
        {children}
      </div>
    </div>
  );
}
