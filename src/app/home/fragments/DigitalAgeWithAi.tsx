import React from "react";
import image_1 from "../../../../public/assets/home/digital_age_with_ai/image_1.png";
import image_2 from "../../../../public/assets/home/digital_age_with_ai/image_2.png";
import image_3 from "../../../../public/assets/home/digital_age_with_ai/image_3.png";
import SectionHeader from "@/components/SectionHeader";
import GradientText from "@/components/GradientText";
import DigitalAgeWithAiCard from "@/components/cards/DigitalAgeWithAiCard";

const DigitalAgeWithAi = () => {

  const features = [
    {
      id: 1,
      title: "Unlock Efficiency & Drive Value with Cutting-Edge AI",
      description:
        <ul className="list-disc text-sm pl-4 lg:pl-10">
          <li>Advanced AI, machine learning, and data analytics</li>
          <li>Actionable insights across the full spectrum of M&A, Divestitures, Healthcare, Pharma, and Life Sciences operations</li>
          <li>Deal sourcing, due diligence, and post-merger integration</li>
          <li>Personalized patient care and compliance management in healthcare</li>
          <li>Tools to make smarter, faster, and more profitable decisions</li>
        </ul>

      ,
      image: image_1,
    },
    {
      id: 2,
      title: "AI-Driven Decision Intelligence",
      image: image_2,
      description:
        <ul className="list-disc text-sm pl-4 lg:pl-10">
          <li>Automate and enhance critical decision-making processes</li>
          <li>Reduce operational inefficiencies and boost profitability</li>
          <li>Navigate complex M&A transactions or optimize healthcare operations seamlessly</li>
          <li>Stay ahead of the curve by harnessing predictive analytics, real-time data insights, and automated compliance</li>
        </ul>

      ,
    },
    {
      id: 3,
      title: "Transform Healthcare, Life Sciences, & Pharma with AI",
      image: image_3,
      description:
        <ul className="list-disc text-sm pl-4 lg:pl-10">
          <li>Our AI solutions revolutionize how companies manage risk, improve patient outcomes, and optimize operations</li>
          <li>Integrate AI-driven analytics</li>
          <li>Support data-driven decisions to enhance patient care, accelerate drug development cycles, and enable cost-effective operations</li>
        </ul>

      ,
    },
  ];

  return (
    <section id="getaheadinthedigitalagewithai" className="relative bg-brand-indigo dark:bg-black space-y-12 py-16 overflow-hidden bg-primary-indigo">
      <SectionHeader
        className="text-black dark:text-white"
        title={
          <>
            Get Ahead in the <GradientText>Digital Age with AI</GradientText>
          </>
        }
        description={
          <>
            With AI-powered solutions designed to streamline the PE Assets intelligence, <br />
            and accelerate digital transformation.
          </>
        }
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
      />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
        {
          features.map(item => (
            <DigitalAgeWithAiCard key={item.id} {...item} />
          ))
        }
      </div>
    </section>
  );
};

export default DigitalAgeWithAi;
