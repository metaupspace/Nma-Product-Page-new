import React from "react";
import { Particles } from "@/components/magicui/ScatteredParticles";
import GradientText from "@/components/GradientText";
// import { ShinyButton } from "@/components/magicui/ShinyButton";
import Modal from "@/components/modals/Modal";
// import WaitlistForm from "@/components/forms/WaitlistForm";
import RequestDemoForm from "@/components/forms (unused)/RequestDemo";

const HeroSection = () => {
  const [isRequestDemoModalOpen, setIsRequestDemoModalOpen] = React.useState<boolean>(false);
  return (
    <section className="relative w-full h-[1100px] bg-brand-dark-blue  rounded-b-3xl lg:rounded-b-[50px] overflow-hidden">

      <div className="hidden lg:block absolute overflow-hidden w-full h-full top-[50px] left-0">
        <Particles />
      </div>

      <div className="md:max-w-5xl xl:max-w-7xl relative px-4 md:px-0 sm:px-6 pt-24 mx-auto">
        <div className="grid items-start gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12 lg:py-20 lg:grid-cols-2">
          {/* Top left gradient - responsive positioning */}
          <div className="absolute top-[-800px] sm:top-[-1000px] lg:top-[-1200px] left-[-800px] sm:left-[-1000px] lg:left-[-1200px] w-[1000px] sm:w-[1300px] lg:w-[1626px] h-[900px] sm:h-[1150px] lg:h-[1403px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[300px] sm:blur-[400px] lg:blur-[558px]" />
          {/* Left Content */}
          <div className="z-20 text-white text-left">
            <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <GradientText>Achieve rapid outcomes</GradientText>
              </h1>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Organize knowledge <br /><span className="italic">effortlessly</span>
              </h1>
              <div className="pt-4">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  through our platform powered by
                </p>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  <GradientText>cognitive text & voice</GradientText> and advanced <GradientText>AI engines</GradientText>
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stack below content on mobile */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto lg:mx-0 mt-8 lg:mt-0 pb-4 sm:pb-6 lg:pb-8">
            <div className="absolute z-0 w-[250px] lg:w-3/4 bg-brand-blue bottom-[1px] lg:bottom-2 right-[-5px] lg:right-[-25px] h-[200px] lg:h-[300px] rounded-xl" />
            <div className="relative text-center text-xl p-6 z-10 w-[350px] lg:w-full bg-white dark:bg-black shadow-lg h-[250px] lg:h-[400px] rounded-xl flex items-center justify-center">
              Our story is best told in motion. Videos are on the way - stay tuned!
            </div>
          </div>

          {/* Bottom right gradient - responsive positioning */}
          <div className="absolute right-[-400px] sm:right-[-500px] lg:right-[-600px] bottom-[-800px] sm:bottom-[-1000px] lg:bottom-[-1300px] w-[600px] sm:w-[800px] lg:w-[971px] h-[550px] sm:h-[700px] lg:h-[879px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[150px] sm:blur-[200px] lg:blur-[245px]" />
        </div>
      </div>
      <Modal
        title="Request a Demo"
        isModalOpen={isRequestDemoModalOpen}
        setIsModalOpen={setIsRequestDemoModalOpen}
      >
        <RequestDemoForm />
      </Modal>
    </section>
  );
};

export default HeroSection;