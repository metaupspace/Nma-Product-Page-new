import React from 'react';
import why_us from "../../../../public/assets/home/why_us/why_us.jpg"
import Image from 'next/image';

interface WhyUsProps {
    title?: string;
    features?: Array<{
        text: string;
    }>;
    buttonText?: string;
    onButtonClick?: () => void;
}

const WhyUsSection: React.FC<WhyUsProps> = ({
    title = "Why us?",
    features = [
        {
            text: "AI-driven Solutions powering the entire lifecycle of Finance, Divestitures, and Digital transformation"
        },
        {
            text: "Tailored Strategies designed for specific challenges and unique opportunities"
        },
        {
            text: "Data-first mindset to harness data and use of automation to drive better outcomes across operations"
        }
    ],
}) => {
    return (
        <div className="to-black py-16 px-6 md:px-0 mx-auto md:max-w-5xl xl:max-w-7xl">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    {/* Left side - Image */}
                    <div className="relative mx-auto">
                        {/* <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-600/30"> */}
                        <Image
                            src={why_us}
                            alt="Why Us"
                            className="w-full md:w-3/4 h-auto rounded-2xl object-cover transition-transform duration-500"
                        />
                        {/* </div> */}
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-medium text-white mb-8">
                            {title}
                        </h2>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2" />
                                    <p className="text-gray-300 leading-relaxed">
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* <div className="pt-4">
                            <ShinyButton
                                onClick={onButtonClick}
                                className="p-2 sm:p-3 px-6 sm:px-8 text-sm sm:text-md rounded-sm"
                            >
                                {buttonText}
                            </ShinyButton>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUsSection;