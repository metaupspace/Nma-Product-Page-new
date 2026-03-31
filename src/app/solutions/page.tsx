"use client";
import HeroSection from "./fragments/HeroSection";
// import IndustrySolutions from "./fragments/IndustrySolutions";
// import UseCaseBasedSolution from "./fragments/UseCaseBasedSolution (old)";
import UsecaseBasedSolutions from "./fragments/UseCaseBasedSolution";
import DeliveryMethods from "./fragments/DeliveryMethods";
// import TrustPortal from "./fragments/TrustPortal";
// import HelpCenter from "./fragments/HelpCenter";
import Certifications from "./fragments/Certifications";
import Principles from "./fragments/Principles";

export default function Solutions() {
  return (
    <main>
      <HeroSection />
      {/* <IndustrySolutions /> */}
      <UsecaseBasedSolutions />
      <DeliveryMethods />
      <Principles />
      {/* <TrustPortal /> */}
      <Certifications />
      {/* <TrustPortal /> */}
      {/* <HelpCenter /> */}
    </main>
  );
}
