'use client'
import EngineeredAndBuilt from "./fragments/EngineeredAndBuilt";
import HeroSection from "./fragments/HeroSection";
import TheProblem from "./fragments/TheProblem";
import TheSolution from "./fragments/TheSolution";
import TrustCrousel from "./fragments/TrustCrousel";
import NavBar from "@/components/productPage/navbar/index";

export default function ProductPage() {
  return (
    <main className="bg-black">
      <NavBar/>
      <HeroSection/>
      <TheProblem/>
      <TheSolution/>
      <EngineeredAndBuilt/>
      <TrustCrousel/>
    </main>
  )
}