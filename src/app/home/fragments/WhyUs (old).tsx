'use client';

import GradientText from '@/components/GradientText';
import SectionHeader from '@/components/SectionHeader';
import React, { useState, useEffect } from 'react';
import image_1 from '../../../../public/assets/home/why_us/image_1.png';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
    {
        id: 1,
        title: 'AI-driven Solutions',
        description:
            'Powering the entire lifecycle of M&A, Divestitures, and Digital Transformation in healthcare.',
    },
    {
        id: 2,
        title: 'Tailored Strategies',
        description:
            'Designed for the unique challenges and opportunities in the healthcare domain.',
    },
    {
        id: 3,
        title: 'Data-First Mindset',
        description:
            'Harnessing data and automation to drive better outcomes across operations.',
    },
    {
        id: 4,
        title: 'Proven Expertise',
        description:
            'Years of experience in M&A and transformation projects at scale.',
    },
];

const WhyUs = () => {
    // Start at index 1 (first real slide) because index 0 is the duplicate last slide
    const [current, setCurrent] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Create extended features array with duplicates for infinite scroll
    // [last, first, second, third, fourth, first]
    const extendedFeatures = [
        features[features.length - 1], // Duplicate last at beginning
        ...features,                   // All original features
        features[0]                    // Duplicate first at end
    ];

    // Auto-advance functionality
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isTransitioning) {
                nextSlide();
            }
        }, 2000); // Change slide every 2 seconds

        return () => clearInterval(interval);
    }, [isTransitioning]);

    const nextSlide = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrent((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrent((prev) => prev - 1);
    };

    // Go to specific slide (for dots navigation)
    const goToSlide = (index:number) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrent(index + 1); // +1 because index 0 is duplicate
    };

    // Handle the transition end to reset position for infinite scroll
    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        // If we're at the duplicate first slide (end of array), jump to real first
        if (current === extendedFeatures.length - 1) {
            setCurrent(1);
        }
        // If we're at the duplicate last slide (beginning of array), jump to real last
        else if (current === 0) {
            setCurrent(features.length);
        }
    };

    // Get the current active index for dots (0-based)
    const getActiveIndex = () => {
        if (current === 0) return features.length - 1; // If at duplicate last, show last dot
        if (current === extendedFeatures.length - 1) return 0; // If at duplicate first, show first dot
        return current - 1; // Normal case
    };

    return (
        <section id='whyus' className="relative overflow-hidden bg-brand-indigo py-16 space-y-8 dark:bg-black">
            <SectionHeader
                className="text-black"
                title={<GradientText>Why Us</GradientText>}
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />

            <div className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row justify-between">
                <div className="md:w-1/2 mx-4 md:mx-0">
                    <Image className="w-full lg:w-3/4 mx-auto" src={image_1} alt="svg" />
                </div>

                <div className="relative box-border flex flex-col items-center justify-center md:w-1/2 mx-8 md:mx-0">
                    <div className="relative flex items-center justify-center w-full">
                        {/* Arrows */}
                        <button
                            className="absolute -left-5 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                            onClick={prevSlide}
                            disabled={isTransitioning}
                        >
                            <ChevronLeft className='dark:text-black' />
                        </button>

                        {/* Carousel Wrapper */}
                        <div className="relative w-full h-contain my-auto overflow-hidden h-contain">
                            <div
                                className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                                style={{ transform: `translateX(-${current * 100}%)` }}
                                onTransitionEnd={handleTransitionEnd}
                            >
                                {extendedFeatures.map((feature, index) => (
                                    <div key={`${feature.id}-${index}`} className='relative min-w-full h-[150px] bg-blue-vertical p-[3px] rounded-md'>
                                        <div className="bg-white dark:bg-black h-full p-8 text-center rounded-md shadow-md">
                                            <h6 className="text-lg font-semibold mb-2">{feature.title}</h6>
                                            <p className="text-sm">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="absolute -right-5 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                            onClick={nextSlide}
                            disabled={isTransitioning}
                        >
                            <ChevronRight className='dark:text-black' />
                        </button>
                    </div>

                    {/* Dots/Indicators */}
                    <div className="flex space-x-2 mt-6">
                        {features.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${getActiveIndex() === index
                                        ? 'bg-blue-600 scale-110'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                onClick={() => goToSlide(index)}
                                disabled={isTransitioning}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;