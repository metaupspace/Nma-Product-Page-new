import React from "react";
import SectionHeader from "@/components/SectionHeader";

export default function Journey() {
    const data = [
        {
            time: "In Dec 2024",
            title: "NMA Founded",
            description: "In 2024, started with a vision to make AI explainable.",
        },
        {
            time: "In Q3 2025",
            title: "Beta Release",
            description: "Beta release for M & A clients",
        },
        {
            time: "In Q4 2025",
            title: "Product Launch",
            description: "Launch of MVP 1 & Healthcare descision Suit",
        },
        {
            time: "In Q1 2026",
            title: "Partnership Expansion",
            description: "MVP 2 and pharma partnership expansion",
        },
    ];

    return (
        <section className="relative bg-brand-dark-blue py-16 space-y-8 overflow-hidden">
            {/* <div className="absolute inset-0 bg-brand-dark-blue z-0"></div> */}
            <div className="absolute left-[-1200px] top-[-500px] w-[1600px] h-[490px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px] z-10" />

            <SectionHeader
                className="z-20 text-white"
                separatorClassName="bg-seperator-gradient-dark"
                title="A Journey Fueled by Innovation"
                description="From Vision to Innovation - Here's How It All Started"
            />

            <div className="relative max-w-7xl h-[30rem] mx-auto bg-blue-vertical p-1 rounded-xl overflow-y-scroll scrollbar-none">
                <div className="flex border-box p-4 lg:p-12 pl-8 rounded-xl overflow-scroll flex-col gap-12 bg-white dark:bg-black relative w-full z-20">
                    {
                        data.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`relative flex ${index % 2 === 0 ? "flex-row-reverse md:flex-row self-start" : "flex-row-reverse self-end"} w-full lg:w-1/2 items-center gap-12`}
                                >
                                    <div
                                        key={index}
                                        className={`w-full bg-blue-vertical text-white space-y-2 p-6 rounded-xl my-4`}
                                    >
                                        <span className="bg-yellow-400 text-black p-2 py-0 rounded-sm">{item.time}</span>
                                        <h3 className="font-medium text-xl">{item.title}</h3>
                                        <p className="">{item.description}</p>
                                    </div>

                                    <div className={`${index % 2 === 0 ? "-left-[1.5px] md:left-[calc(100%-4rem)]" : "-left-[1.5px]"} -z-10 absolute bg-blue-vertical h-[2px] w-[70px] top-1/2`} />

                                    {(index !== data.length - 1) &&
                                        <div className={`${index % 2 === 0 ? "-left-[1.5px] md:left-full" : "-left-[1.5px]"} -z-10 absolute bg-blue-vertical w-[2px] h-[240px] md:h-[230px] top-1/2`} />
                                    }

                                    <div className={`${index % 2 === 0 ? "-ml-3 md:-mr-3" : "-ml-3"} bg-blue-vertical rounded-full w-7 h-6`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
