import React, { useState } from "react";
import { ShinyButton } from "@/components/magicui/ShinyButton";
import ContactUsForm from "@/components/forms/ContactUsForm";
import Modal from "@/components/modals/Modal";
import beta_testing from "../../../../public/assets/home/beta_testing/beta_testing.jpg";
import Image from "next/image";
import Clarity from "@microsoft/clarity";
// import { set } from "zod";
interface BetaTestingProgramProps {
  className?: string;
}

const BetaTestingProgram: React.FC<BetaTestingProgramProps> = ({
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    "Direct Collaboration",
    "Exclusive Incentives on purchase(s)",
    "Early Access",
    "Real-World Feedback",
    "Contribute as a customer advocacy leader",
    "Feature as guest customer advisor on our webpage",
    "Invited to write guest articles",
    "Invited as a guest speaker to share user experiences"
  ];

  const handleClickEvent = (title: string) => {
    setIsModalOpen(true);
    if (typeof window !== "undefined" && Clarity) {
      Clarity.event(`card_click_${title}`);
    }
  };

  return (
    <>
      <section className={`py-16 px-6 ${className}`}>
        <div className="md:max-w-5xl xl:max-w-7xl mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-4 text-3xl font-medium text-white lg:text-5xl">
                  Beta Testing Program
                </h2>
                <p className="text-lg text-gray-300">
                  Be the first to shape the future - Join Our Beta Testing
                  Program
                </p>
              </div>

              <div className="space-y-3">
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ShinyButton
                className="px-8 py-3"
                onClick={() => handleClickEvent("join_beta_testing")}
              >
                Join Beta Testing
              </ShinyButton>
            </div>

            {/* Right Illustration - Made Larger */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={beta_testing}
                alt="Beta Testing Program"
                className="object-cover w-full h-auto max-w-md transition-transform duration-500 rounded-lg shadow-lg lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Modal
        title="Join Our Beta Testing Program"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <ContactUsForm />
      </Modal>
    </>
  );
};

export default BetaTestingProgram;
