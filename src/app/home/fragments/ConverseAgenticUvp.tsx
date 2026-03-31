"use client"

import ConverseAgencticUvpCard from '@/components/cards/ConverseAgencticUvpCard';
import Marquee from '@/components/magicui/MarqueeWrapper';
import SectionHeader from '@/components/SectionHeader';
import React from 'react';

const ConverseAgenticUvp = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      title: "End to End M&A Valuation Lifecycle Solution",
      description: "Comprehensive M&A valuation solutions from initial assessment to final transaction closure.",
    },
    {
      id: 2,
      title: "AI for Healthcare Excellence",
      description: "Advanced AI solutions designed specifically for healthcare organizations and providers.",
    },
    {
      id: 3,
      title: "End to End Divestiture Solutions",
      description: "We prioritize transparency, bias mitigation, and secure data practices in every solution we deliver.",
    },
    {
      id: 4,
      title: "Real Time Insights",
      description: "Get instant, actionable insights from your data with our real-time analytics platform.",
    },
    {
      id: 5,
      title: "Strategic Consulting",
      description: "Expert strategic guidance to help organizations navigate complex business transformations.",
    },
    {
      id: 6,
      title: "Advanced Data Analytics",
      description: "Transform raw data into meaningful insights with our advanced analytics capabilities.",
    }
  ];

  return (
    <section id='converseagenticaiuvp' className="relative bg-white dark:bg-black py-16 overflow-hidden">
      {/* Content with highest z-index */}
      <div className='relative z-20 space-y-8'>

        <SectionHeader
          className='text-black dark:text-white'
          title='ConverseAgenticAI UVP'
          separatorClassName='bg-seperator-gradient-light dark:bg-seperator-gradient-dark'
        />

        <Marquee
          pauseOnHover
          repeat={6}
          className="max-w-7xl mx-auto [--duration:20s] pb-24" // Add bottom padding
        >
          {cardData.map(item => (
            <ConverseAgencticUvpCard {...item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ConverseAgenticUvp;