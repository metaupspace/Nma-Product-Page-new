"use client";
import OutlinedButton from "@/components/buttons/OutlinedButton";
// import AnimatedGradientButton from "@/components/magicui/GradientButton"
import SectionHeader from "@/components/SectionHeader";
import image_1 from "../../../../public/assets/partner/opportunities/image_1.png";
import image_2 from "../../../../public/assets/partner/opportunities/image_2.png";
import image_3 from "../../../../public/assets/partner/opportunities/image_3.png";
import image_4 from "../../../../public/assets/partner/opportunities/image_4.png";
import Image from "next/image";
import Link from "next/link";

const OpportunitiesIn = () => {
  const data = [
    {
      id: 1,
      title: "Business Strategy & Growth",
      image: image_1,
    },
    {
      id: 2,
      title: "AI Research & Engineering",
      image: image_2,
    },
    {
      id: 3,
      title: "Healthcare Innovation",
      image: image_3,
    },
    {
      id: 4,
      title: "Life Sciences & Pharma",
      image: image_4,
    },
  ];

  return (
    <section
      id="opportunities"
      className="relative py-16 space-y-8 overflow-hidden text-center text-white"
    >
      <div className="absolute inset-0 z-0 bg-brand-dark-blue" />
      <div className="absolute left-[-1200px] top-[-600px] w-[1600px] h-[493.37px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px] z-10" />
      <div className="absolute right-[-600px] bottom-[-600px] w-[950px] h-80 bg-green-300 z-10 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[245.80px] z-10" />

      <SectionHeader title="Opportunities In" />

      <div className="relative z-20 mx-auto space-y-12 md:max-w-5xl xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-6 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative h-30 rounded-md bg-blue-vertical p-[3px] hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center w-full h-full gap-2 p-2 px-6 text-center bg-white rounded-md dark:bg-black">
                <Image src={item.image} alt={item.title} />
                <h2 className="text-black dark:text-white">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Link href="https://www.linkedin.com" target="_blank">
            <OutlinedButton>Apply Now</OutlinedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesIn;
