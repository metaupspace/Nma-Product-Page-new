import React from "react";
import SectionHeader from "@/components/SectionHeader";
import GradientText from "@/components/GradientText";
import AwardCard, { AwardData } from "@/components/cards/AwardCard";
import Marquee from "@/components/magicui/MarqueeWrapper";

interface ResponsibleAIAwardsProps {
  awards?: AwardData[];
}

const ResponsibleAIAwards: React.FC<ResponsibleAIAwardsProps> = ({
  awards = [
    {
      id: "1",
      title: "Award Title",
    },
    {
      id: "2",
      title: "Award Title",
    },
    {
      id: "3",
      title: "Award Title",
    },
    {
      id: "4",
      title: "Award Title",
    },
    {
      id: "5",
      title: "Award Title",
    },
    // {
    //   id: "6",
    //   title: "Award Title",
    // },
  ],
}) => {
  return (
    <section className="py-16 bg-brand-indigo dark:bg-black space-y-8">
      {/* Header */}

      <SectionHeader
        title={<> Recognized for Excellence in <GradientText>Responsible AI</GradientText></>}
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        description={
          <>
            We&apos;re proud to be acknowledged by industry leaders for our
            commitment to transparent, explainable AI.
          </>
        }
      />

      {/* Awards Grid */}
      <Marquee className="max-w-7xl mx-auto">
        {awards.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </Marquee>
    </section>
  );
};

export default ResponsibleAIAwards;