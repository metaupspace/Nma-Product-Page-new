"use client";

import React from "react";
import TrustCarousel from "@/components/productPage/TrustCarousel";
import { initialTrustCards, type TrustCard } from "@/lib/productPage/trustConstants";

export default function TrustCrousel() {
	const cards: TrustCard[] = initialTrustCards;

	return (
		<section className="mx-auto max-w-[1200px] py-20 px-4">
			<h2 className="text-center text-3xl font-semibold text-white mb-4">Trusted by Industry Leaders</h2>
			<p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
				Hear how forward-thinking leaders are turning their fragmented data into a competitive
				advantage.
			</p>
			<TrustCarousel cards={cards} />
            		{/* Blue hero/banner (matches provided image) */}
			<div className="mx-auto mb-12 w-full max-w-[1400px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#006FFF] to-cyan-600 p-12 text-center text-white mt-44">
				<h1 className="mx-auto max-w-5xl text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
					The Firms That Build Their Intelligence Infrastructure Now Will Compete at a Different Level.
				</h1>
				<div className="mt-10 flex justify-center ">
					<button className="rounded-full bg-white px-24 py-3 text-sm font-semibold text-black shadow-lg ">
						Contact Sales
					</button>
				</div>
			</div>
		</section>
	);
}
