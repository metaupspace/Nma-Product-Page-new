import React from "react";
import Image from "next/image";
import hero_image from "../../../../public/assets/newsroom/hero_section/hero_image.png"

const Hero: React.FC = () => {
  return (
    <section className="px-4 pt-36 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold leading-snug dark:text-white leading-relaxed md:text-5xl">
          Explore the Latest From <br />
          <span className="mt-2 bg-gradient-to-b from-[#00D5FF] to-[#006FFF] bg-clip-text text-transparent">Neural Mind Atlas</span>
        </h1>
        {/* Description */}
        <p className="max-w-3xl mx-auto mb-12 text-lg leading-snug dark:text-white md:text-xl">
          A modular AI platform that adapts to your workflows, aligns with your
          compliance, and speaks your language—literally.
        </p>

        {/* Illustration Container */}
        <div className="relative flex items-center justify-center">
            <Image src={hero_image} alt="NewsRoomImage" width={400} height={600}></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
