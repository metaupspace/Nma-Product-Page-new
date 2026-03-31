"use client";
import GrowWithUs from "./fragments/GrowWithUs";
import OpenRoles from "./fragments/OpenRoles";
import HeroSection from "./fragments/HeroSection";
import OpportunitiesIn from "./fragments/OpportunitiesIn";
import Testimonials from "./fragments/Testimonials";
import WhyPartnerWithUs from "./fragments/WhyPartnerWithUs";
import FillTheForm from "./fragments/FillTheForm";

export default function About() {
    return (
        <main>
            <HeroSection />
            <WhyPartnerWithUs />
            <OpportunitiesIn />
            <GrowWithUs />
            <OpenRoles />
            <Testimonials />
            <FillTheForm />
        </main>
    );
}