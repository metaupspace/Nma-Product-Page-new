import SectionHeader from "@/components/SectionHeader"
import image_1 from "../../../../public/assets/about/what_drives_us/image_1.png"
import image_2 from "../../../../public/assets/about/what_drives_us/image_2.png"
import image_3 from "../../../../public/assets/about/what_drives_us/image_3.png"
import image_4 from "../../../../public/assets/about/what_drives_us/image_4.png"
import image_5 from "../../../../public/assets/about/what_drives_us/image_5.png"
import Image from "next/image"
import WhatDrivesUsCard from "@/components/cards/WhatDrivesUsCard"

const WhatDrivesUs = () => {

    const cardData = [
        {
            id: 1,
            title: "Integrity-Driven Innovation",
            image: image_1,
            description:
                <ul className="list-disc text-sm pl-10 text-white">
                    <li>Fuse ethics with AI innovation</li>
                    <li>Deliver transparent, secure, transformative solutions</li>
                    <li>Lead with transparency, and ethics</li>
                    <li>Deep commitment to transforming industries responsibly through cutting-edge AI</li>
                </ul>
        },
        {
            id: 2,
            title: "Purposeful Impact",
            image: image_2,
            description:
                <ul className="list-disc text-sm pl-10 text-white" >
                    <li>Designed to solve real- world problem</li>
                    <li>Maximize ROI, health outcomes, and strategic clarity.</li>
                    <li>Drive measurable value</li>
                    <li>Accelerate growth, improve outcomes, and solve high - stakes challenges</li>
                </ul >
        },
        {
            id: 3,
            title: "Human-Centered Collaboration",
            image: image_3,
            description:
                <ul className="list-disc text-sm pl-10 text-white">
                    <li>Build trust, co-create with clients</li>
                    <li>Align technology to the real needs of people and organizations</li>
                    <li>Turning complex challenges into practical, scalable solutions</li>
                </ul>
        },
        {
            id: 4,
            title: "Relentless Exellence",
            image: image_4,
            description:
                <ul className="list-disc text-sm pl-10 text-white">
                    <li>Pursue AI-powered precision and progress relentlessly</li>
                    <li>Never compromise on quality</li>
                    <li>Thrive on pushing boundaries</li>
                    <li>Deliver intelligent, scalable, and future-ready solutions</li>
                    <li>Set industry benchmarks</li>
                </ul>
        },
        {
            id: 5,
            title: "Responsible AI for a Better Future",
            image: image_5,
            description:
                <ul className="list-disc text-sm pl-10 text-white">
                    <li>Champion ethical, bias-aware, and compliant AI practices</li>
                    <li>Empower industries and protect users</li>
                    <li>Safeguard data, equity, and compliance.</li>
                </ul>
        }
    ]

    return (
        <section className="bg-brand-indigo dark:bg-black py-16 space-y-8">
            <SectionHeader
                title="What Drives Us?"
                className="text-black dark:text-white"
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                description={
                    <>
                        Discover the features built to make your workflow faster, clearer, and easier to trust. From prompt orchestration to explainability, everything just clicks.
                    </>
                }
            />
            <div className="md:max-w-5xl xl:max-w-7xl mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* First row - 3 cards */}
                    {cardData.slice(0, 3).map(item => (
                        <WhatDrivesUsCard key={item.id} {...item} />
                    ))}
                </div>

                {cardData.length > 3 && (
                    <div className="flex justify-center mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cardData.slice(3).map(item => (
                                <WhatDrivesUsCard key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default WhatDrivesUs;