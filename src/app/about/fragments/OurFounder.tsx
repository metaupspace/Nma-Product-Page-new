import SectionHeader from "@/components/SectionHeader"
import Image from "next/image"
import { useState } from "react"
import outlined_logo from "../../../../public/assets/brand/outlined_logo.png"

const OurFounder = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const about = "Our journey began with a groundbreaking insight while data surrounds us, harnessing its true potential remains elusive. We witnessed organizations grappling with fragmented information, teams struggling with digital twin implementation, and valuable insights lost in the chaos of unstructured data. Inspired by technological advancement, we developed a revolutionary solution a digital twin platform that converts complex data into actionable intelligence. Our path has been guided by innovation, teamwork, and the conviction that digital twin technology can transform business operations fundamentally. Today, we pioneer digital twin solutions, enabling enterprises to leverage our cutting-edge digital twin software for smarter operations, accelerated innovation, and data driven decision-making. This is merely the beginning and we're thrilled to revolutionize the future together."

    const TRUNCATE_LENGTH = 300
    const truncatedText = about.slice(0, TRUNCATE_LENGTH)
    const shouldShowReadMore = about.length > TRUNCATE_LENGTH

    const toggleExpanded = () => setIsExpanded(prev => !prev)

    return (
        <section
            id="founder"
            className="relative min-h-[40rem] pt-36 pb-16 overflow-hidden"
        >
            {/* Background gradient blur */}
            <div
                className="absolute -right-[600px] -bottom-[500px] w-[950px] h-80 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[245.80px]"
                aria-hidden="true"
            />

            <div className="relative z-10 md:max-w-5xl xl:max-w-7xl mx-auto">
                <SectionHeader
                    title="A Word From Our Founder"
                    className="text-white text-center"
                />

                <div className="bg-white dark:bg-black rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row min-h-[400px]">
                        {/* Founder Image */}
                        <div className="lg:w-1/2 h-64 lg:h-auto">
                            <div className="w-full h-full flex items-center justify-center">
                                <Image alt="nma_logo" height={250} src={outlined_logo} />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-center">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-brand-blue dark:text-blue-400">
                                        Leela Srinivasan
                                    </h2>
                                    <h3 className="text-gray-600 dark:text-gray-300 font-medium">
                                        Founder @Neural Mind Atlas
                                    </h3>
                                </div>

                                <div className="prose dark:prose-invert max-w-none">
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {isExpanded ? about : truncatedText}
                                        {!isExpanded && shouldShowReadMore && "..."}

                                        {shouldShowReadMore && (
                                            <button
                                                onClick={toggleExpanded}
                                                className="ml-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-200 focus:outline-none focus:underline"
                                                aria-expanded={isExpanded}
                                                aria-label={isExpanded ? "Show less text" : "Show more text"}
                                            >
                                                {isExpanded ? "Show less" : "Read more"}
                                            </button>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurFounder