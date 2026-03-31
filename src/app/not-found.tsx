"use client"

import { ShinyButton } from '@/components/magicui/ShinyButton';
import { ArrowLeft, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';


const Custom404 = () => {

  const router = useRouter()

  return (
    <div className="min-h-screen bg-brand-dark-blue relative overflow-hidden font-poppins">
      {/* Gradient Background Elements */}
      <div className="absolute left-[-1200px] top-[-500px] w-[1600px] h-[493.37px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px] z-10" />
      <div className="absolute right-[-1200px] bottom-[-500px] w-[1600px] h-[493.37px] bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full blur-[558.25px] z-10" />

      {/* Main Content - with top spacing for navbar */}
      <div className="relative flex items-center justify-center min-h-screen pt-20 p-4">

        <div className="text-center max-w-2xl mx-auto">
          {/* Animated 404 Text */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white leading-none tracking-tight drop-shadow-2xl">
              404
            </h1>
            <div className="w-full h-[.15rem] bg-seperator-gradient-dark rounded-full mt-4"></div>
          </div>

          {/* Error Message */}
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have drifted away into the digital void.
              Don&apos;t worry, we&apos;ll help you navigate back to safety.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            {/* go back */}
            <ShinyButton
              onClick={() => router.back()}
              className="group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                Go Back
              </span>
            </ShinyButton>

            {/* home page */}
            <ShinyButton
              onClick={() => router.push("/")}
              className="group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-3">
                <Home className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                Home Page
              </span>
            </ShinyButton>
          </div>
          {/* Footer message */}
          <div className="mt-16 text-white/60 text-sm">
            <p>Error Code: 404 • Page Not Found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;