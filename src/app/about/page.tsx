"use client";
// import HeroSection from "./fragments/HeroSection";
import OurVision from "./fragments/OurVision";
import OurMission from "./fragments/OurMission";
import WhatDrivesUs from "./fragments/WhatDrivesUs";
import MeetTheTeams from "./fragments/MeetTheTeam";
// import Journey from "./fragments/Journey";
import OurFounder from "./fragments/OurFounder";
// import PurposeAndResponsibility from "./fragments/PurposeAndResponsibility";
// import Findus from "./fragments/FindUs (old)";
import LetsConnectSection from "./fragments/LetsConnectSection";
import ConnectWithUs from "./fragments/ConnectWithUs";

export default function About() {
    return (
        <main>
            {/* <HeroSection /> */}
            <OurFounder />
            <OurVision />
            <OurMission />
            <WhatDrivesUs />
            <MeetTheTeams />
            {/* <Journey /> */}
            {/* <PurposeAndResponsibility /> */}
            {/* <Findus /> */}
            <LetsConnectSection />
            {/* <PressKit /> */}
            <ConnectWithUs />
        </main>
    );
}