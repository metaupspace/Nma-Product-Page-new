"use client";

import GradientText from "@/components/GradientText";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import Clarity from "@microsoft/clarity";

const Principles = () => {
  const data = [
    {
      id: 1,
      title: "Fairness & Inclusion",
      description:
        "We design AI systems that treat individuals equitably—regardless of race, gender, age, or background. Our models are continuously tested to minimize bias and ensure inclusive outcomes.",
    },
    {
      id: 2,
      title: "Transparency & Explainability",
      description:
        "We prioritize interpretability in our AI outputs and ensure that decision-making logic is documented and auditable. Customers have access to clear usage guidelines and system documentation.",
    },
    {
      id: 3,
      title: "Security by Design",
      description:
        "Our AI solutions are built with end-to-end data protection, encryption, and governance controls—aligned with GDPR, HIPAA, and global privacy standards.",
    },
    {
      id: 4,
      title: "Human-Centered AI",
      description:
        "We keep humans in the loop. Our products are designed to augment human decision-making, not fully automate it—ensuring accountability and oversight.",
    },
  ];

  const handleHoverEvent = (title: string) => {
    if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_hover_${title}`);
    }
  };

  return (
    <section className="py-16 space-y-12 bg-black">
      <SectionHeader
        className="text-white"
        separatorClassName="bg-seperator-gradient-dark"
        title={
          <>
            Our Responsible AI <GradientText>Principles</GradientText>
          </>
        }
        description="We work with industry leaders to validate our security posture and operational excellence."
      />

      {/* AI Principles Cards */}
      <div className="grid grid-cols-1 gap-8 px-4 md:px-0 mx-auto xl:max-w-7xl md:max-w-5xl md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            onMouseDown={() => handleHoverEvent(item.title)}
            key={item.id}
            className="relative group"
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-75 bg-blue-horizontal rounded-xl group-hover:opacity-100 blur-sm group-hover:blur-none"></div>

            {/* Card content */}
            <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6 h-64 overflow-hidden transition-all duration-500 ease-out transform group-hover:scale-[1.02] group-hover:shadow-2xl">
              {/* Title - always visible */}
              <div className="absolute transition-all duration-500 ease-out top-6 left-6 right-6 group-hover:top-4">
                <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>

              {/* Description - slides up on hover */}
              <div className="absolute transition-all duration-500 ease-out transform translate-y-full opacity-0 inset-x-6 bottom-6 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="h-px mb-4 transition-transform duration-300 delay-200 transform scale-x-0 bg-blue-horizontal group-hover:scale-x-100"></div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute w-2 h-2 transition-all duration-300 delay-100 transform scale-0 bg-blue-400 rounded-full opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:scale-100"></div>
              <div className="absolute w-1 h-1 transition-all duration-300 delay-200 transform scale-0 bg-purple-500 rounded-full opacity-0 top-6 right-6 group-hover:opacity-100 group-hover:scale-100"></div>

              {/* Background pattern */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-5 group-hover:opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 transition-transform duration-700 transform translate-x-16 -translate-y-16 rounded-full bg-gradient-to-bl from-blue-400 to-transparent group-hover:translate-x-12 group-hover:-translate-y-12"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Principles;
