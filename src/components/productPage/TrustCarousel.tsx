"use client";

import React, { useRef } from "react";
import Image from "next/image";
import type { TrustCard } from "@/lib/productPage/trustConstants";

type Props = {
  cards: TrustCard[];
};

export default function TrustCarousel({ cards}: Props) {
  const listRef = useRef<HTMLDivElement | null>(null);

  function scrollBy(pages: number) {
    if (!listRef.current) return;
    const viewport = listRef.current.clientWidth || 0;
    const amount = Math.round(viewport * 0.5) * pages; // scroll by half the viewport (one card width when two are visible)
    listRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div className="" >
        <div
          ref={listRef}
          className="no-scrollbar flex w-full gap-6 overflow-x-auto px-2 py-4 "
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cards.map((c) => (
            <div
              key={c.id}
              className="flex-shrink-0 w-[min(520px,50%)] rounded-2xl  border-white/10 bg-black/30 p-6 shadow-inner border-2 border-white"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-700 overflow-hidden">
                  {c.avatar ? (
                    <Image src={c.avatar} alt={c.name} width={40} height={40} />
                  ) : null}
                </div>
                <div>
                  <div className="font-semibold text-white">{c.name}</div>
                  <div className="text-sm text-gray-300">{c.role}</div>
                </div>
              </div>

              <p className="mt-4 text-gray-300">{c.quote}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom-right controls */}
      <div className="absolute right-6 bottom-19 flex items-center gap-3 ">
        <button
          aria-label="previous"
          className="h-10 w-10 rounded-full bg-black/60 text-white flex items-center justify-center shadow-md"
          onClick={() => scrollBy(-1)}
        >
          ‹
        </button>
        <button
          aria-label="next"
          className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md"
          onClick={() => scrollBy(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
