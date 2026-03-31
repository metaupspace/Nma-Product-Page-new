import Marquee from "../magicui/MarqueeWrapper"
import image_1 from "../../../../public/assets/home/latest_insights/image_1.png";
import Image from "next/image";
import { InteractiveHoverButton } from "../magicui/InteractiveHoverButton";

const LatestInsightsCard = () => {

    const cardData = [
        {
            id: 1,
            title: "Article name",
            description: "Short description like this...",
            image: image_1,
        },
        {
            id: 2,
            title: "Atricle name",
            description: "Short description like this...",
            image: image_1,
        },
        {
            id: 3,
            title: "Article name",
            description: "Short description like this...",
            image: image_1,
        },
    ];
    return (
        <Marquee pauseOnHover className="container mx-auto [--duration:20s]">
            {cardData.map((item) => (
                <div key={item.id} className="w-1/3 p-3 hover:scale-105 transition duration-500 border border-gray-500 ">
                    <div>
                        <Image
                            className="w-full h-[200px] object-cover"
                            src={item.image}
                            alt={item.title}
                        />
                    </div>
                    <div className="flex items-center p-2 justify-between text-center min-w-[200px]">
                        <div className="text-left">
                            <h6 className="font-semi-bold">{item.title}</h6>
                            <p className="text-sm">{item.description}</p>
                        </div>
                        <div>
                            <InteractiveHoverButton>Read More</InteractiveHoverButton>
                        </div>
                    </div>
                </div>
            ))}
        </Marquee>
    )
}

export default LatestInsightsCard