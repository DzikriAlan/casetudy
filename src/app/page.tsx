"use client";
import { HeroSection } from "@/shared/components/hero-section";
import { ExploreSection } from "@/shared/components/explore-section";
export default function Page() {

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <ExploreSection />
    </div>
  );
}