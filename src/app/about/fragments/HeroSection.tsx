import React from "react";
import GradientText from "@/components/GradientText";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
    const router = useRouter()
    return (
        <section className="relative overflow-hidden py-24">
            {/* Left Content */}
            <div className="container mx-auto px-2 lg:px-0">
                <div className="flex items-center justify-center text-center h-full pt-16">
                    <div className="space-y-20">
                        <div className="space-y-8 lg:space-y-12">
                            <p className="text-sm md:text-md lg:text-lg">
                                Where breakthrough technology meets bold transformation.
                            </p>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-snug font-bold">
                                <GradientText>Transforming</GradientText> the Business of Health, Science & <br />
                                Capital with Intelligent AI
                            </h1>
                            <p className="text-md lg:text-xl">
                                We are a mission-driven company empowering leaders in Private Equity, Healthcare, Pharma, and Life Sciences to <br />
                                navigate M&A, Divestitures, and enterprise transformation with precision and purpose.
                            </p>
                        </div>
                        <div>
                            <ShinyButton
                                onClick={() => router.push("/solutions")}
                                className="group"
                            >
                                <span className="flex items-center justify-center gap-3">
                                    Explore Solutions
                                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                            </ShinyButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
