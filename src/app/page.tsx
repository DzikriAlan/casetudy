"use client";
import { HeroSection } from "@/shared/components/hero-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
import { YourCaseSection } from "@/shared/components/your-case-section";
import { FooterSection } from "@/shared/components/footer-section";
import { WhySection } from "@/shared/components/why-section";
import { Navbar } from "@/shared/components/navbar-section";
import { useState, useEffect } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-white min-h-screen">
      <div className={`fixed px-3 py-4 z-40 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
        <Navbar />
      </div>
      <HeroSection /> 
      <ListPorto />
      <YourCaseSection />
      <WhySection />
      <FooterSection />
    </div>
  );
}