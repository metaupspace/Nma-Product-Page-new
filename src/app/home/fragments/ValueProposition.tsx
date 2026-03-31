// import Marquee from '@/components/magicui/Marquee';
import ValuePropositionCard from '@/components/cards/ValuePropositionCard';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import React from 'react';

const ValueProposition = () => {
    const features = [
        { id: 1, title: "Digital Age with AI", href: '#getaheadinthedigitalagewithai' },
        { id: 2, title: "ConverseAgenticAI UVP", href: "#converseagenticaiuvp" },
        { id: 3, title: "Latest Insights", href: "#latestinsights" },
        { id: 4, title: "Why Us?", href: "#whyus" },
        { id: 5, title: "Beta-Testing Program", href: "#betatestingprogram" },
    ];

    return (
        <section className="relative overflow-hidden py-8 lg:py-16 space-y-12">
            {/* Background color layer */}
            <div className="absolute inset-0 bg-brand-dark-blue z-0" />

            {/* Background gradients */}
            <div className="absolute left-[-900px] top-[-700px] w-[1600px] h-[493px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px] z-10" />
            <div className="absolute right-[-500px] bottom-[-500px] w-[950px] h-80 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[245.80px] z-10" />

            {/* Content with highest z-index */}
            <SectionHeader
                className='z-20 text-white'
                separatorClassName='bg-seperator-gradient-dark'
                title='Value Proposition'
                description='Transforming M&A, and Divestitures Across Private Equity, Healthcare, Pharma, and Life Sciences with AI-Powered Intelligence'
            />

            <div className='max-w-7xl relative z-20 mx-auto flex gap-4'>
                <div className="flex gap-4 w-full">
                    {features.map(item => (
                        <ValuePropositionCard {...item}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;