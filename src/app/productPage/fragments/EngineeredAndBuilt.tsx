"use client";

import Image from "next/image";

import { logoItems } from "@/lib/productPage/constants";

export default function EngineeredAndBuilt() {
	return (
		<section className="relative overflow-hidden bg-black  text-white">
			<div className="pointer-events-none absolute inset-y-0 -right-[650px] z-0 w-[65%] -translate-y-32 overflow">
				<Image
					src="/assets/productPage/gradient.png"
					alt="Background gradient"
					fill
					priority
					className="object-cover object-right opacity-50"
				/>
				<div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
			</div>

			<div className="relative z-10">
				<div className="mx-auto w-full max-w-[1672px] px-20">
					<div className="grid items-center gap-[386px] lg:grid-cols-[1.2fr_1fr] min-h-[508px] mr-">
						<div>
							<h2 className="text-3xl font-semibold sm:text-4xl md:text-[40px]">
								Engineered for Enterprise
								<br />
								Scale and Security
							</h2>
							<p className="mt-4 max-w-lg text-md text-gray-300 leading-relaxed">
								Built on a modern, high-performance architecture designed to process complex
								financial models.
							</p>
						</div>

						<div className="rounded-2xl px-6 -ml-6">
							<div className="grid grid-cols-3 w-[400px] h-[350px]">
								{logoItems.map((logoSrc, index) => (
									<div
										key={logoSrc}
										className={`flex items-center justify-center p-5 sm:p-6 border-white/10 ${
											index % 3 !== 2 ? "border-r" : ""
										} ${index < 6 ? "border-b" : ""}`}
									>
										<Image
											src={logoSrc}
											alt="Enterprise logo"
											width={72}
											height={72}
											className="h-10 w-auto sm:h-12"
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto mt-20 max-w-6xl px-4">
					<h3 className="text-center text-2xl font-semibold sm:text-3xl m-20">
						Built by People Who Understand Enterprise.
					</h3>
				<div className="pointer-events-none absolute inset-y-0 -left-[650px] z-0 w-[70%] translate-y-60 overflow">
				<Image
					src="/assets/productPage/gradient.png"
					alt="Background gradient"
					fill
					priority
					className="object-cover object-right opacity-50"
				/>
				<div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black" />
			</div>

					<div className="mt-10 grid gap-6">
						<div className="flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-black/40  py-4 px md:flex-row md:items-center">
							<div className="relative h-[200px] w-[240px] ml-6 shrink-0 overflow-hidden rounded-md">
								<Image
									src="/assets/productPage/founder.png"
									alt="Founder Leela Srinivasan"
									fill
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="mt-28 ml-8">
								<p className="text-lg text-gray-300 ">Founder Leela Srinivasan’s founding insight:</p>
								<p className="mt-2 text-xl font-semibold text-white">
									Data surrounds us, harnessing its true potential remains elusive.
								</p>
							</div>
						</div>

						<div className="rounded-2xl border border-white/10 bg-black/ mt-12 ">
							<div className="flex flex-col md:flex-row md:items-center py-4 max-w-full">
								<div className="flex w-full md:w-auto flex-col gap-4 sm:flex-row ml-6">
									<div className="relative h-[180px] w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black/20">
										<Image
											src="/assets/productPage/atlanta.png"
											alt="Atlanta map"
											fill
											className="h-full w-full object-cover"
										/>
									</div>
									<div className="relative h-[180px] w-[300px] overflow-hidden rounded-xl border border-white/10 bg-black/20">
										<Image
											src="/assets/productPage/mumbaiMap.png"
											alt="Mumbai map"
											fill
											className="h-full w-full object-cover"
										/>
									</div>
								</div>
								<div className="mt-9 md:mt-14 ml-8 md:flex-1 ">
									<p className="text-lg text-white">Atlanta HQ &amp; extended team,</p>
									<p className="text-lg text-white mt-1">enterprise coverage across time zones</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}