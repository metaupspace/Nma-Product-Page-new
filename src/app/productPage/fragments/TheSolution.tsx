"use client";

import SolutionCard from "@/components/productPage/SolutionCard";
import FloatingButton from "@/components/productPage/FloatingButton";
import Image from "next/image";
import { solutionCards } from "@/lib/productPage/constants";
import { capabilityItems } from "@/lib/productPage/constants";

export default function TheSolution() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-1 text-xs font-medium tracking-[0.18em] text-gray-300 uppercase">
          the solution
        </div>
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-[40px] mb-6">A Digital Twin That Thinks, Speaks, and Validates On Your Schedule</h2>
        <p className="mx-auto max-w-3xl text-center text-md text-gray-300 md:text-md leading-relaxed mb-12">
          Generic AI requires you to know exactly what to ask. ConvoSynth builds a persistent intelligence layer that surfaces what you did not know to look for, backed by audit-ready validation.
        </p>
      </div>

      <div className="container mx-auto mt-12 max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {solutionCards.slice(0, 2).map((s) => (
            <SolutionCard
              key={s.title}
              title={s.title}
              description={s.description}
              imageSrc={s.imageSrc}
              floatingLabels={s.floatingLabels}
            />
          ))}
        </div>

        {solutionCards[2] && (
          <div className="mt-8">
            <div className="grid gap-6 md:grid-cols-2 items-center rounded-2xl bg-[#0b0b0b] p-8">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white mb-4">{solutionCards[2].title}</h3>
                <p className="text-md text-gray-300 leading-relaxed">{solutionCards[2].description}</p>
              </div>

              <div className="rounded-lg bg-white p-4 md:p-0 flex justify-center items-center relative overflow-visible">
                <Image
                  src={solutionCards[2].imageSrc}
                  alt={solutionCards[2].title}
                  width={1400}
                  height={700}
                  className="w-full h-auto block rounded-md md:w-[120%] lg:w-[140%] md:-translate-x-6"
                />
                {solutionCards[2].floatingLabels?.map((label: (typeof solutionCards)[number]["floatingLabels"][number], idx: number) => (
                  <FloatingButton key={`${solutionCards[2].title}-label-${idx}`} text={label.text} position={label.position} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="container mx-auto max-w-full px-4 mt-32">
          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            {capabilityItems.map((item, index) => (
              <div key={item.label} className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-3">
                  <Image src={item.imageSrc} alt={item.label} width={72} height={72} className="h-16 w-16" />
                  <span className="text-sm text-gray-200">{item.label}</span>
                </div>
                {index < capabilityItems.length - 1 && (
                  <Image src="/assets/productPage/star.png" alt="separator" width={18} height={18} className="h-4 w-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-[#0B6DFF] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between px-3 py-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-4xl font-bold text-white">Now Accepting Founding Enterprise Partners</h3>
              <p className="mt-2 text-md font-bold text-blue-100">Limited Cohort Beta Program.</p>
            </div>
            <button className="rounded-full bg-white px-8 py-3 text-xl font-semibold text-black shadow">Apply now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
