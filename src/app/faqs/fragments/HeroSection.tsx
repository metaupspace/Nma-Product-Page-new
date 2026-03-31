import React from "react";


const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Left Content */}
            <div className="container mx-auto py-48">
                <div className="space-y-5 text-center">
                    <h1 className="text-5xl font-semibold">
                        FAQs
                    </h1>
                    <p className="text-xl">
                        Quick answers to the most common questions from enterprise partners, developers, and clinical teams.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
