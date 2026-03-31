import { ShinyButton } from "@/components/magicui/ShinyButton"
import SectionHeader from "@/components/SectionHeader"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const OurMission = () => {
    const router = useRouter()
    return (
        <section className="relative text-white text-center overflow-hidden py-12">
            <div className="absolute inset-0 bg-brand-dark-blue z-0"></div>
            <div className="absolute left-[-1200px] top-[-500px] w-[1600px] h-[493.37px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px] z-10" />
            <div className="absolute right-[-600px] bottom-[-500px] w-[950px] h-80 bg-green-300 z-10 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[245.80px] z-10" />

            <div className='container mx-auto relative space-y-8 z-20'>
                <SectionHeader
                    title="Our Mission"
                    description={
                        <>
                            At NeuralMindAtlas, we pioneer digital twin AI solutions that transform how enterprises harness data. <br />
                            Our platform converts raw information into actionable intelligence, driving innovation, <br />
                            operational clarity, and strategic growth across high-stakes industries.
                        </>
                    }
                />
                <ShinyButton
                    onClick={() => router.push("/solutions")}
                    className="group"
                >
                    <span className="flex items-center justify-center gap-3">
                        See Solutions in Action
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                </ShinyButton>
            </div>
        </section>
    )
}

export default OurMission