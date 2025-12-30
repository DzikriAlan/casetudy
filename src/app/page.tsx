"use client";
import { HeroSection } from "@/shared/components/hero-section";
import { ExploreSection } from "@/shared/components/explore-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
export default function Page() {

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <ExploreSection />
      <ListPorto />
    </div>
  );
}