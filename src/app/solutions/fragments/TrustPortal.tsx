import SectionHeader from "@/components/SectionHeader"
import image_1 from "../../../../public/assets/solutions/trust_portal/image_1.png"
import image_2 from "../../../../public/assets/solutions/trust_portal/image_2.png"
import Image from "next/image"
import AnimatedGradientButton from "@/components/magicui/GradientButton"
import Link from "next/link"


const TrustPortal = () => {
    return (
        <section className="bg-brand-indigo dark:bg-black py-12 space-y-12">

            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    className="text-black dark:text-white py-1"
                    title="Trust Portal"
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />
                <div className="flex flex-col p-4 lg:p-0 md:flex-row gap-8 items-center justify-around">
                    <Image className="w-full md:w-1/2 lg:w-1/3" src={image_1} alt="trust portal" />
                    <div className="space-y-8 text-center lg:text-left">
                        <p className="text-md lg:text-xl">
                            Welcome to our Trust Portal: your go-to resource for <br />
                            understanding how we protect your data, your customers, <br />
                            and your business.
                        </p>
                        <div className="relative">
                            <Link href="/trust-portal">
                                <AnimatedGradientButton className="w-full">
                                    Learn More &rarr;
                                </AnimatedGradientButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    className="text-black dark:text-white py-1"
                    title="Responsible AI"
                    separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                />
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center justify-around">
                    <Image className="w-3/4 md:w-1/2 lg:w-1/3" src={image_2} alt="responsible ai" />
                    <div className="space-y-8 text-center lg:text-left">
                        <p className="text-md lg:text-xl">
                            Building and deploying Artificial Intelligence responsibly, <br />
                            transparently, and ethically—across every product, platform, <br />
                            and partnership.
                        </p>
                        <div className="relative">
                            <Link href="/trust-portal">
                                <AnimatedGradientButton>
                                    Learn More &rarr;
                                </AnimatedGradientButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TrustPortal