"use client";

import Image from "next/image";
import { problemCards } from "@/lib/productPage/constants";
import CardHover from "@/components/productPage/CardHover";

type ProblemCardProps = (typeof problemCards)[number];

const ProblemCard = ({ title, subtitle, description, imageSrc }: ProblemCardProps) => {
	return (
		<CardHover>
			<div className="relative overflow-hidden flex h-full flex-col justify-between rounded-2xl bg-[#111111] px-6 pb-8 pt-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
				<div className="absolute inset-0 z-0 origin-bottom scale-y-0 transform bg-gradient-to-t from-[#00D5FF]/10 via-[#006FFF]/30 to-transparent transition-transform duration-300 ease-out group-hover:scale-y-50 pointer-events-none" />
				<div className="relative z-10">
					<h3 className="text-xl font-semibold text-white">
						{title}
						{subtitle && <br />}
						{subtitle && <span>{subtitle}</span>}
					</h3>
					<div className="mt-2 overflow-hidden rounded-lg">
						<Image
							src={imageSrc}
							alt={title}
							width={480}
							height={300}
							className="mx-auto h-[180px] w-full object-contain"
						/>
					</div>
				</div>

				<p className="relative z-10 text-sm leading-relaxed text-gray-300">{description}</p>
			</div>
		</CardHover>
	);
};

const TheProblem = () => {
	return (
		<section className="bg-black py-4 text-white">
			<div className="container mx-auto max-w-6xl px-4 text-center">
				<div className="mb-6 inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-4 py-1 text-xs font-medium tracking-[0.18em] text-gray-100 uppercase">
					the problem
				</div>
				<h2 className="text-3xl font-semibold sm:text-4xl md:text-[40px] mb-5">
					The Intelligence Gap Is Costing You
					<br />
					More Than You Know
				</h2>
				<p className="mt-6 mx-auto max-w-3xl text-center text-md text-gray-300 md:text-md leading-relaxed mb-12">
					Fragmented data slows due diligence, obscures portfolio risks, and wastes your top talent on
					manual reporting.
				</p>
			</div>

			<div className="container mx-auto mt-12 max-w-6xl px-4">
				<div className="grid gap-6 md:grid-cols-3">
					{problemCards.map((card: ProblemCardProps) => (
						<ProblemCard key={card.title + card.subtitle} {...card} />
					))}
				</div>
			</div>
		</section>
	);
};
export default TheProblem;