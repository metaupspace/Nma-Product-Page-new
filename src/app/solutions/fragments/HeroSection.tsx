import React from "react";
import GradientText from "@/components/GradientText";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative py-24 pt-36 pb-48 overflow-hidden">
            {/* Left Content */}
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex items-center justify-center text-center h-full pt-16">
                    <div className="space-y-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-snug font-bold">
                            <GradientText>Enterprise AI Solutions </GradientText>
                        </h1>
                        <p className="text-md md:text-xl lg:text-xl">
                            Accelerate output, optimize deals, and transform care with Neural Mind Atlas's modular,
                            secure, and intelligent AI solutions.

                        </p>
                        {/* <ShinyButton
                            className="group"
                        >
                            <span className="flex items-center justify-center gap-3">
                                Schedule a call
                                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                            </span>
                        </ShinyButton> */}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
