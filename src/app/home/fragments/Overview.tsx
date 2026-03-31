"use client";

import React from "react";
import knowledge_as_service from "../../../../public/assets/home/overview/knowledge_as_service.jpg";
import congnitive_voice from "../../../../public/assets/home/overview/cognitive_voice.jpg";
import data_validation from "../../../../public/assets/home/overview/data_validation.jpg";
import SectionHeader from "@/components/SectionHeader";
import OverviewCard from "@/components/cards/OverviewCard";
const Overview = () => {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardData = [
    {
      title: "Knowledge As a Service",
      imageSrc: knowledge_as_service,
      description: "Gathering information, MCP Integration, Cognitive output",
    },
    {
      title: "Cognitive Voice",
      imageSrc: congnitive_voice,
      description: "Speed-up dissemination of  information exchange",
    },
    {
      title: "Data Validation",
      imageSrc: data_validation,
      description: "Provide accuracy of data",
    },
  ];

  return (
    <section className="mt-[-200px] md:mt-[-380px] lg:mt-[-400px] space-y-12 pb-1 lg:py-8">
      <SectionHeader
        className="text-white"
        separatorClassName="bg-seperator-gradient-dark"
        title="Overview"
        // description="Transforming M&A and Divestitures Across Private Equity, Healthcare, Pharma, and Life Sciences with AI-Powered Intelligence"
      />

      <div className="grid grid-cols-1 gap-6 px-4 pb-24 mx-auto md:max-w-5xl xl:max-w-7xl md:grid-cols-2 lg:grid-cols-3 gap-y-24 md:px-0">
        {/* Cards Grid */}
        {cardData.map((item, index) => (
          <OverviewCard
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Overview;
