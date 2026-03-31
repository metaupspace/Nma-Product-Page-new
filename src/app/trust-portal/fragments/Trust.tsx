'use client';

import AnimatedGradientButton from '@/components/magicui/GradientButton';
import { ShinyButton } from '@/components/magicui/ShinyButton';
import React from 'react';

const TrustworthyAISection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto w-full py-12 my-4 text-center">
      <div className="flex flex-col items-center px-4 lg:px-0 gap-4">
        {/* Top buttons: Equal width */}

        <div className="grid grid-cols-2 gap-4">
          <ShinyButton>
            Download Guidelines
          </ShinyButton>
          <ShinyButton>
            Download Broucher
          </ShinyButton>

          {/* Bottom buttons: Slightly wider */}
          <AnimatedGradientButton className="py-2">
            Contact AI Ethics Team
          </AnimatedGradientButton>
          <AnimatedGradientButton className="py-2">
            Report a Concern
          </AnimatedGradientButton>
        </div>

        {/* Description */}
        <p className="max-w-xl mt-6 text-center">
          We build trustworthy AI that serves humanity and drives equitable progress.
        </p>
      </div>
    </section>
  );
};

export default TrustworthyAISection;
