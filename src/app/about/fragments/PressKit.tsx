import SectionHeader from "@/components/SectionHeader"
import { CheckCircle, DownloadIcon } from "lucide-react"
import Link from "next/link"
import { ShinyButton } from "@/components/magicui/ShinyButton"

const PressKit = () => {
    return (
        <section className="py-16 space-y-8 bg-brand-indigo dark:bg-black">
            <SectionHeader
                className="text-black dark:text-white"
                title="Press Kit"
                description="Your Gateway to Our Vision, Stories and Innovation."
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />

            <div className="container mx-auto flex flex-col items-center space-y-16">
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-16">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center gap-6 py-3 px-4 rounded"
                        >
                            <CheckCircle className="text-primary-blue w-5 h-5" />

                            <span className="text-gray-800 dark:text-gray-400 text-md lg:text-lg text-center">
                                Company Overview & Fact Sheet -pdf
                            </span>
                            <Link href="#">
                            <ShinyButton title="Download" className="p-2">
                                <DownloadIcon size={20}/>
                            </ShinyButton>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-10">
                    <AnimatedGradientButton>Download Now</AnimatedGradientButton>
                </div> */}
            </div>

        </section>
    )
}

export default PressKit