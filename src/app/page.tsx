"use client";
import { HeroSection } from "@/shared/components/hero-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
import { YourCaseSection } from "@/shared/components/your-case-section";
import { Footer } from "@/shared/components/footer";
import { WhyCard } from "@/shared/components/why-section";
export default function Page() {

  return (
    <div className="bg-white min-h-screen">
      <HeroSection /> 
      <ListPorto />
      <YourCaseSection />
      <WhyCard />
      <Footer />
    </div>
  );
}