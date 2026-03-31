"use client"

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import image_1 from "../../../../public/assets/trust-portal/responsible_innovation/image_1.png"

const PartneringSection = () => {
  return (
    <section className="relative py-16 space-y-32 mx-auto">
      <SectionHeader
        className='text-black dark:text-white'
        separatorClassName='bg-seperator-gradient-light dark:bg-seperator-gradient-dark'
        title={<>Partnering for Responsible Innovation</>}
        description=" We work with industry leaders to validate our security posture and operational excellence."
      />

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-0">
        <div className="bg-blue-vertical p-[3px] rounded-md">
          <div className="p-8 bg-white dark:bg-black rounded-md">
            <div className="flex flex-col-reverse md:flex-row">
              {/* Left Side - Content Text */}
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  We actively collaborate with industry alliances, researchers, and
                  policy leaders to shape AI standards that are safe, ethical, and
                  human-aligned.
                </p>
              </div>

              {/* Right Side - Collaboration Illustration */}
              <div className="flex justify-center -mt-[150px] md:-mt-[120px] lg:-mt-[200px]">
                <Image
                  src={image_1}
                  alt="Image"
                  width={500}
                  height={600}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartneringSection;
