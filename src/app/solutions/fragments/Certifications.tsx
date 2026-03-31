"use client"

import React from "react";

import SectionHeader from "@/components/SectionHeader";
interface TrustPortalProps {
  className?: string;
}

const Certifications: React.FC<TrustPortalProps> = () => {
  // const data = [
  //   {
  //     id: 1,
  //     title: "GDPR / DPA"
  //   },
  //   {
  //     id: 2,
  //     title: "HIPAA Readiness"
  //   },
  //   {
  //     id: 3,
  //     title: "SOC 2 Type II"
  //   },
  //   {
  //     id: 4,
  //     title: "ISO 27001"
  //   },
  // ]
  return (
    <div className="py-16 space-y-8 realative">
      {/* Certifications & Attestations Section */}
      <SectionHeader
        className='text-black dark:text-white'
        separatorClassName='bg-seperator-gradient-light dark:bg-seperator-gradient-dark'
        title={<>Certifications & Attestations</>}
        description=" We work with industry leaders to validate our security posture and operational excellence."
      />

      {/* Coming Soon Placeholder */}
      <div className="flex items-center justify-center px-4 mx-auto md:max-w-5xl xl:max-w-7xl md:px-0">
        <div className="relative text-center text-4xl z-10 w-[350px] lg:w-full bg-white dark:bg-black shadow-lg h-[250px] lg:h-[400px] rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-800">
          <div className="space-y-4">
            <div className="text-gray-600 dark:text-gray-400">Coming Soon</div>
            <div className="text-sm text-gray-500 dark:text-gray-500">
              We believe proof matters. That’s why we’re pursuing industry certifications. Stay tuned! <br />
              Until our certifications arrive, here’s what we stand for: Integrity, Innovation, Collaboration
            </div>
          </div>
        </div>
      </div>

      {/* Certification Cards */}
      {/* <div className="grid grid-cols-1 gap-6 px-4 mx-auto max-w-7xl md:px-0 sm:grid-cols-2 lg:grid-cols-4">
        {
          data.map(item => (
            <div key={item.id} className="bg-blue-vertical rounded-md p-[3px]">
              <div className="p-6 text-center bg-white rounded-md dark:bg-black">
                <div className="flex justify-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                    <svg
                      className="w-6 h-6 dark:text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            </div>
          ))
        }
      </div> */}
    </div>
  );
};

export default Certifications;