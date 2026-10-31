import React from "react";
import HeroSection from "@/components/hero/HeroSection";
import ScrollVelocity from "@/components/effects/ScrollVelocity";
import PillarsSection from "@/components/sections/PillarsSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CurrentFocusSection from "@/components/sections/CurrentFocusSection";
import ContactSection from "@/components/sections/ContactSection";

const TECH_MARQUEE = [
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "NODE.JS",
  "POSTGRESQL",
  "PYTHON",
  "SCIKIT-LEARN",
  "OPENCV",
  "TAILWIND CSS",
  "REST APIS",
  "DATA STRUCTURES",
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <ScrollVelocity items={TECH_MARQUEE} baseVelocity={1.0} />
      <PillarsSection />
      <SelectedWorkSection />
      <ExperienceSection />
      <TechStackSection />
      <CurrentFocusSection />
      <ContactSection />
    </div>
  );
}

