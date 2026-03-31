import GradientText from "@/components/GradientText"
import SectionHeader from "@/components/SectionHeader"
import image_1 from "../../../../public/assets/partner/why_partner_with_us/image_1.png"
import image_2 from "../../../../public/assets/partner/why_partner_with_us/image_2.png"
import image_3 from "../../../../public/assets/partner/why_partner_with_us/image_3.png"
import image_4 from "../../../../public/assets/partner/why_partner_with_us/image_4.png"
import Image from "next/image"

const WhyPartnerWithUs = () => {

    const data = [
        {
            id: 1,
            text: 'Early access to AI features',
            image: image_1
        },
        {
            id: 2,
            text: 'Joint GTM + white-labeling',
            image: image_2
        },
        {
            id: 3,
            text: 'Co-marketing and press coverage',
            image: image_3
        },
        {
            id: 4,
            text: 'Inclusion in marketplace listings',
            image: image_4
        },
    ]


    return (
        <section className="relative bg-brand-indigo dark:bg-black space-y-8 py-16">
            <SectionHeader
                className="text-black dark:text-white"
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
                title={
                    <>
                        Why
                        <GradientText> Partner </GradientText>
                        With Us?
                    </>
                }
            />

            <div className="relative md:max-w-5xl xl:max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    data.map(item => {
                        return (
                            <div
                                key={item.id}
                                className="relative rounded-md bg-white p-[2px] rouded-md bg-blue-vertical hover:scale-105 transition-all duration-300"
                            >
                                <div className="bg-white dark:bg-black rounded-md flex flex-col items-center justify-around w-full h-full p-6 text-center">
                                    <h2 className="font-medium text-xl">{item.text}</h2>
                                    <Image src={item.image} alt={item.text} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default WhyPartnerWithUs