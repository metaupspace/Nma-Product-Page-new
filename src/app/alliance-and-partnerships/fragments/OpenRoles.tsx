import GradientText from "@/components/GradientText";
// import AnimatedGradientButton from "@/components/magicui/GradientButton"
import OutlinedButton from "@/components/buttons/OutlinedButton";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import SectionHeader from "@/components/SectionHeader";
import different_voices_one_vision from "../../../../public/assets/partner/different_voices_one_vision/image_1.png";
import Image from "next/image";
import Link from "next/link";

const OpenRoles = () => {
  return (
    <section className="py-16 space-y-8 bg-brand-indigo dark:bg-black">
      <SectionHeader
        className="text-black dark:text-white"
        separatorClassName="bg-seperator-gradient-light dark:bg-seperator-gradient-dark"
        title={
          <>
            Different Voices, <GradientText>One Vision</GradientText>
          </>
        }
      />
      <div className="flex flex-col items-center justify-between gap-6 px-4 mx-auto md:max-w-5xl xl:max-w-7xl md:px-4 md:flex-row">
        <div className="flex flex-col w-full gap-12 md:w-5/6 lg:w-1/2">
          <p className="text-lg font-semibold">
            We believe diversity drives innovation. Our commitment to DEI is
            embedded in how we hire, collaborate, and lead. We create space for
            every individual, regardless of gender, race, identity, or
            background—to thrive, speak up, and shape what&apos;s next.
          </p>
          <div className="flex gap-6">
            <Link target="_blank" href="https://www.linkedin.com">
              <ShinyButton>Explore Open Roles</ShinyButton>
            </Link>
            <Link href="/alliance-and-partnerships#teamtestimonials">
              <OutlinedButton>Hear from Our Team &rarr;</OutlinedButton>
            </Link>
          </div>
        </div>
        <Image src={different_voices_one_vision} alt="culture" />
      </div>
    </section>
  );
};

export default OpenRoles;
