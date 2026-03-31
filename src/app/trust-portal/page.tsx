import React from "react";
import HeroSection from "./fragments/HeroSection";
import GovernanceSection from "./fragments/Governance";
import PartneringSection from "./fragments/Partner";
import TrustworthyAISection from "./fragments/Trust";
interface TrustPortalProps {
  className?: string;
}

const TrustPortal: React.FC<TrustPortalProps> = () => {
  return (
    <main>
      <HeroSection />
      <GovernanceSection />
      <PartneringSection />
      <TrustworthyAISection />
    </main>
  );
};

export default TrustPortal;
