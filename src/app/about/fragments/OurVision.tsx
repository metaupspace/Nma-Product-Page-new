import SectionHeader from "@/components/SectionHeader"
import image_1 from "../../../../public/assets/about/our_vision/image_1.png"
import image_2 from "../../../../public/assets/about/our_vision/image_2.png"
import image_3 from "../../../../public/assets/about/our_vision/image_3.png"
import OurVisionCard from "@/components/cards/OutVisionCard"

const OurVision = () => {
    const cardData = [
        {
            id: 1,
            title: "Breaking Boundries with adaptive AI",
            image: image_1
        },
        {
            id: 2,
            title: "Turning Information into Enterprise Momentum",
            image: image_2
        },
        {
            id: 3,
            title: "Digital Twins for Limitless Enterprise Intelligence",
            image: image_3
        }
    ]

    return (
        <section className="bg-brand-indigo dark:bg-black py-8 space-y-8">
            <SectionHeader
                className="text-black dark:text-white"
                title="Our Vision"
                separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
            />
            <div className="md:max-w-5xl xl:max-w-7xl md:mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cardData.map(item => (
                      <OurVisionCard {...item}/>
                    ))
                }
            </div>
        </section>
    )
}

export default OurVision