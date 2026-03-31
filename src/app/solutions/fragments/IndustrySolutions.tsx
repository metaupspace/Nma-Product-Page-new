"use client";

import Marquee from "@/components/magicui/MarqueeWrapper"
    ;
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/InteractiveHoverButton";
import { Microscope } from "lucide-react";

const IndustrySolutions = () => {
    // Array of card data
    const cardData = [
        {
            id: 1,
            iconLink: <Microscope />,
            title: "Pharmashceuticals",
            videoLink: "https://www.youtube.com/embed/2mzFQRcfNQ4?si=cs8xKArKiTmWJzib",
            ctaLink: "#",
        },
        {
            id: 2,
            iconLink: <Microscope />,
            title: "Divestitures",
            videoLink: "https://www.youtube.com/embed/2mzFQRcfNQ4?si=cs8xKArKiTmWJzib",
            ctaLink: "#",
        },
        {
            id: 3,
            iconLink: <Microscope />,
            title: "Private Equity Firms",
            videoLink: "https://www.youtube.com/embed/2mzFQRcfNQ4?si=cs8xKArKiTmWJzib",
            ctaLink: "#",
        },
        {
            id: 4,
            iconLink: <Microscope />,
            title: "Healthcare Providers",
            videoLink: "https://www.youtube.com/embed/2mzFQRcfNQ4?si=cs8xKArKiTmWJzib",
            ctaLink: "#",
        }
    ];


    return (
        <section className="relative py-16 overflow-hidden bg-brand-indigo dark:bg-black">
            {/* Content with highest z-index */}
            <div className="relative space-y-12 text-center">
                <SectionHeader
                    className="text-black dark:text-white -py-1"
                    title="Industry Based Solutions"
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />
                <Marquee pauseOnHover className="max-w-7xl mx-auto [--duration:20s]">
                    {cardData.map((item) => {
                        // Convert watch URL to embed format
                        const embedUrl = item.videoLink.replace("watch?v=", "embed/") + "?autoplay=1&mute=1";
                        return (
                            <div
                                key={item.id}
                                className="bg-blue-vertical p-[2px] rounded-xl w-full"
                            >
                                <div key={item.id} className="flex flex-col gap-6 items-center text-center bg-white dark:bg-black rounded-xl p-6 border">
                                    {item.iconLink}
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <iframe
                                        src={embedUrl}
                                        title="YouTube video player"
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                    <InteractiveHoverButton>Learn More</InteractiveHoverButton>
                                </div>
                            </div>
                        );
                    })}
                </Marquee>
                {/* <ShinyButton>Try Now</ShinyButton> */}
            </div>
        </section>
    );
};

export default IndustrySolutions;
