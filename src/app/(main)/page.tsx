"use client";

import AboutSection from "@/components/About";
import FeatureGrid from "@/components/Feature";
import HeroSlider from "@/components/Hero";
import ScrollButtons from "@/components/ScrollButtons";

export default function HomePage() {
  
  return (
    <main className="min-h-screen overflow-hidden mt-3">
      <HeroSlider />
      <FeatureGrid />
      <AboutSection />
      <ScrollButtons />
    </main>
  );
}

