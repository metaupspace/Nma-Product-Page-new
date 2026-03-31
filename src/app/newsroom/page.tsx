"use client";
import React from "react";
import Hero from "./fragments/HeroSection";
import BlogsSection from "./fragments/Blogs";
// import MediaCoverageSection from "./fragments/MediaCoverage";
import PressReleasesSection from "./fragments/PressRelease";
// import EventsSection from "./fragments/Events";
// import Webinars from "./fragments/Webinars";
import NewsletterSignup from "./fragments/NewsLetter";

const NewsRoom = () => {
  return (
    <main className="overflow-hidden bg-primary-indigo">
      <Hero/>
      <BlogsSection/>
      {/* <MediaCoverageSection/> */}
      <PressReleasesSection/>
      {/* <EventsSection/> */}
      {/* <Webinars/> */}
      {/* <ResponsibleAIAwards/> */}
      <NewsletterSignup/>
    </main>
  );
};

export default NewsRoom;
