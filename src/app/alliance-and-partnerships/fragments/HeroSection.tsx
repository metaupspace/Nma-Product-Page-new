import React from "react";
import GradientText from "@/components/GradientText";
// import { ShinyButton } from "@/components/magicui/ShinyButton";

const HeroSection = () => {
    return (
        <>
            <section className="relative overflow-hidden py-48 pt-24 px-4">
                {/* Left Content */}
                <div className="container mx-auto">
                    <div className="flex items-center justify-center text-center h-full pt-16">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl lg:7xl font-semibold">
                                    Connect and Grow with
                                </h1>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
                                    <GradientText>NeuraMindAtlas</GradientText>
                                </h1>
                                <p className="text-xl md:text-2xl lg:text-3xl">
                                    Be part of a team transforming industries with intelligent, ethical AI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
