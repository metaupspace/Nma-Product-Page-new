"use client";
import Image from "next/image";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import { RIGHT_TEXTS } from "@/lib/productPageBeta/constants";
import Form from "./form";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-20 max-w-screen mx-auto">
      <div className="pointer-events-none absolute inset-y-0 -left-48 -top-96 z-0 w-[60vw] overflow-hidden h-[100%]">
        <Image
          src="/assets/productPage/gradient2.png"
          alt="Background gradient"
          fill
          priority
          className="object-cover object-left opacity-70 transform -scale-x-100  "
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 m-20">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full border border-white/25 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-white/75">
            Founders Partner Program
          </span>

          <h1 className="mt-5 max-w-7xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Shape the Intelligence Infrastructure of the Next Decade of PE
            M&amp;A &amp; Divestitures
          </h1>

          <p className="mt-4 text-sm text-white/70 md:text-base">
            This isn’t beta testing. This is a founding partnership.
          </p>

          <ShinyButton className="mt-8 px-16 py-3 text-lg font-semibold rounded-lg">
            Apply now
          </ShinyButton>
        </div>

        <div className="mt-24 w-full flex flex-col md:flex-row items-center gap-6 ">
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-xl overflow-hidden p-4 ml-11">
              <div className="text-3xl mb-8 font-bold font-sans text-white">
                <h1>What Founding Private Equity Partners receive</h1>
              </div>
              <Image
                src="/assets/productPageBeta/dollar.png"
                alt="Dollar illustration"
                width={1100}
                height={948}
                className="object-cover rounded-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <Image
              src="/assets/productPageBeta/Line.png"
              alt="vertical divider"
              width={2}
              height={3}
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 -right-96 -z-0 w-[90vw] overflow h-[100%] mt-96 top-96 ">
            <Image
              src="/assets/productPage/gradient.png"
              alt="Background gradient"
              fill
              priority
              className="object-cover object-left opacity-20 transform -scale-x-100 ml-[500px]"
            />

          </div>
          <div className="md:w-1/2 flex flex-col gap-4">
            {RIGHT_TEXTS.map((text, idx) => (
              <div
                key={idx}
                className="border border-white/30 bg-black rounded-lg px-4 py-3 text-md text-left"
              >
                {text}
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <div className="mt-60">
        <Form/>
      </div>
      
    </section>
  );
}
