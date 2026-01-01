"use client";
import { HeroSection } from "@/shared/components/hero-section";
import { ExploreSection } from "@/shared/components/explore-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
import { YourCaseSection } from "@/shared/components/your-case-section";
import { Footer } from "@/shared/components/footer";
export default function Page() {

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <ExploreSection />
      <ListPorto />
      <YourCaseSection />
      <Footer />
    </div>
  );
}