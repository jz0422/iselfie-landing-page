import React from "react";
import { Header } from "../../components/Header";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GoalsSection } from "./sections/GoalsSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection/HowItWorksSection";
import { IndicatorsSection } from "./sections/IndicatorsSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { OverlapSection } from "./sections/OverlapSection/OverlapSection";
import { VideoSection } from "./sections/VideoSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";

export const FullPageScreen = () => {
  return (
    <div className="flex flex-col w-full" data-model-id="121:3310">
      <Header />
      <HeroSection />
      <MainContentSection />
      <WhyChooseUsSection />
      <OverlapSection />
      <HowItWorksSection />
      <IndicatorsSection />
      <VideoSection />
      <GoalsSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};
