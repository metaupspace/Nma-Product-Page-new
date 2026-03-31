"use client";
import Image from "next/image";
import { poweredByItems } from "@/lib/productPage/constants";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/assets/productPage/gradient.png"
          alt="Gradient background"
          fill
          priority
          className="object-cover object-top"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-8 sm:mt-12 md:mt-16">

        {/* Badge */}
        <div className="inline-block mb-4 px-3 sm:px-4 py-1 text-xs sm:text-sm text-gray-300 border-2 border-gray-500 rounded-full">
          Trusted by 200+ Industry leaders
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-4 sm:mt-6 leading-tight">
          Your Portfolio Runs on Data.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Your Decisions Deserve More Than Instinct.
        </h1>

        {/* Subheading */}
        <p className="text-md sm:text-md max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-6 sm:mb-8 mt-4 sm:mt-6 text-gray-300 leading-relaxed px-2">
          Neural Mind Atlas builds a Digital Twin of your enterprise knowledge, converting fragmented
          information into actionable intelligence across every deal, portfolio company, and LP
          relationship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <button className="w-full sm:w-auto rounded-full bg-[#056df4] px-8 sm:px-10 py-3 text-sm font-bold text-white hover:bg-[#0460d4] transition-colors">
            Request a Demo
          </button>
          <button className="w-full sm:w-auto rounded-full border border-gray-300 px-8 sm:px-10 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>

        {/* Product Screenshot */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          <Image
            src="/assets/productPage/preview.png"
            alt="Product screenshot"
            width={1200}
            height={700}
            className="mx-auto rounded-lg w-full h-auto"
          />
        </div>

        {/* Powered By Bar */}
        <div className="mt-6 sm:mt-8 mb-4 flex justify-center px-0 sm:px-4">
          <div className="relative flex flex-col sm:flex-row w-full max-w-[1200px] items-center gap-4 sm:gap-6 md:gap-8 rounded-lg border border-gray-500/70 bg-black/40 py-4 px-4 sm:px-6 md:px-8 text-gray-200">

            <span className="whitespace-nowrap text-base sm:text-lg font-bold shrink-0">
              Powered by:
            </span>

            <div className="flex flex-wrap flex-1 items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 md:gap-x-10">
              {poweredByItems.map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <Image
                    src="/assets/productPage/star.png"
                    alt="Star"
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                  <span className="whitespace-nowrap text-sm sm:text-base text-white">{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;