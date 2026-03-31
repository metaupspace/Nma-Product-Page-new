"use client";

import Image from "next/image";
import FloatingButton from "./FloatingButton";

type FloatingLabel = {
  readonly text: string;
  readonly position:
  | string
    | {
        readonly top?: string;
        readonly left?: string;
        readonly right?: string;
        readonly bottom?: string;
        readonly transform?: string;
      };
};

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  floatingLabels?: ReadonlyArray<FloatingLabel>;
};

export default function SolutionCard({ title, description, imageSrc = "", floatingLabels = [] }: Props) {
  return (
    <article className="relative rounded-2xl bg-[#111111] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.6)] h-full flex flex-col justify-between">
      <div className="">

        <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-300 mb-6">{description}</p>

        <div className="relative rounded-lg">
          <Image src={imageSrc} alt={title} width={760} height={380} className="w-full h-auto rounded-md" />
          {floatingLabels.map((label, idx) => (
            <FloatingButton key={idx} text={label.text} position={label.position} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
      </div>
    </article>
  );
}
