"use client"

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import image_1 from "../../../../public/assets/trust-portal/governance/image_1.png"

const GovernanceSection = () => {
  return (
    <div className="py-16 space-y-32 bg-white dark:bg-black">
      {/* Section Title */}

      <SectionHeader
        className='text-black dark:text-white'
        separatorClassName='bg-seperator-gradient-light dark:bg-seperator-gradient-dark'
        title={<>Governance & Oversight</>}
        description="We work with industry leaders to validate our security posture and operational excellence."
      />

      {/* Main Content Container */}
      <div className="px-4 md:px-0">
        <div className="max-w-7xl mx-auto bg-blue-vertical rounded-md p-[3px]">
          <div className="bg-white dark:bg-black rounded-md">
            <div className="relative flex flex-col md:flex-row items-center justify-between h-full p-8 lg:py-0">
              {/* Left Side - Illustration */}
              <div className="justify-center flex-1 -mt-[140px]">
                <Image
                  src={image_1}
                  alt="GovImage"
                  height={100}
                  width={400}
                />
              </div>

              {/* Right Side - Content List */}
              <div className="flex-col items-center justify-center flex-1 pt-8 space-y-4">
                <ul className="list-disc text-sm pl-10">
                  <li className="text-lg leading-relaxed">
                    AI Ethics Board
                  </li>
                  <li className="text-lg leading-relaxed">
                    Model Audit Trail
                  </li>
                  <li className="text-lg leading-relaxed">
                    Impact Assessments
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceSection;
