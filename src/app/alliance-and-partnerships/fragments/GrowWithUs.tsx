import GradientText from "@/components/GradientText"
import SectionHeader from "@/components/SectionHeader"

export const GrowWithUs = () => {
    return (
        <section className="py-16 space-y-8 px-4">
            <SectionHeader
                className="text-black dark:text-white"
                title={
                    <>
                        <GradientText>Grow</GradientText> Smarter,
                        <GradientText> Scale</GradientText> Faster,
                        <GradientText> Win</GradientText> Together,
                    </>
                }
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                description={
                    <>
                        Join our Partner Program to collaborate, co-ordinate and lead intelligent transformation
                    </>
                }
            />
            <div className="relative md:max-w-5xl xl:max-w-7xl mx-auto md:px-0 flex flex-col md:flex-row gap-24 items-center justify-between">
                <div className="flex flex-col w-full text-white gap-8 ">
                    {
                        [
                            "Build Smarter AI Ecosystems",
                            "Expand Reach. Unlock Revenue",
                            "Shape AI Strategy With Us",
                            "Amplify AI Thought Leadership"
                        ].map((item, ind) => (
                            <span
                                key={ind}
                                className="text-lg rounded-md bg-blue-horizontal text-center p-3"
                            >
                                {item}
                            </span>
                        ))
                    }
                </div>
                <div className="bg-black p-6 text-center w-full h-[200px] lg:h-[400px] flex items-center justify-center">
                    We can’t wait to share our journey with you in video. Stay connected for updates
                </div>
            </div>
        </section>
    )
}

export default GrowWithUs