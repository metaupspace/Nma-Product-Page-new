import React from "react";
import GradientText from "@/components/GradientText";


const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Left Content */}
            <div className="container mx-auto px-4 md:px-0 py-24 pt-48">
                <div className="flex items-center justify-center text-center h-full">
                    <div className="space-y-4">
                        <p className="text-md">NeuralMindAtlas Resources</p>
                        <h1 className="text-4xl md:text-5xl font-semibold">
                            <GradientText>Collaborate. Contribute. Co-Create</GradientText>
                        </h1>
                        <p className="text-xl">
                            Join our vibrant community of innovators, researchers, developers, and business leaders. Share ideas, discuss <br />
                            breakthroughs, and drive the future of AI together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;