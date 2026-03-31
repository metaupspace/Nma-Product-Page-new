import GradientText from "@/components/GradientText"
import { ShinyButton } from "@/components/magicui/ShinyButton"
import SectionHeader from "@/components/SectionHeader"
// import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
const ConnectWithUs = () => {
    const router = useRouter()
    return (
        <section className="py-16 bg-primary-indigo">
            <div className="flex flex-col items-center space-y-8">

                <SectionHeader
                    className="text-black dark:text-white"
                    title={<><GradientText>Build the Future</GradientText> with Us</>}
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                    description={
                        <>
                            We&apos;re more than an AI company—we&apos;re mission-driven to facilitate transformations with cutting-edge intelligence. <br />
                            Join us to shape smarter systems, healthier outcomes, and a future where technology uplifts everyone

                        </>
                    }
                />

                <div className="flex gap-4 px-4">
                    <ShinyButton
                        onClick={() => router.push("/alliance-and-partnerships")}
                        className="group"
                    >
                        <span className="flex items-center justify-center gap-3">
                            Alliance and Partnerships
                            {/* <ArrowRight className="w-5 h-5 transition-transform transform group-hover:translate-x-1" /> */}
                        </span>
                    </ShinyButton>
                    <ShinyButton
                        onClick={() => router.push("/alliance-and-partnerships#opportunities")}
                        className="group"
                    >
                        <span className="flex items-center justify-center gap-3">
                            Career Opportunities
                            {/* <ArrowRight className="w-5 h-5 transition-transform transform group-hover:translate-x-1" /> */}
                        </span>
                    </ShinyButton>
                </div>
            </div>
        </section>
    )
}

export default ConnectWithUs
