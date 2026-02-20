"use client";
import { HeroSection } from "@/shared/components/hero-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
import { YourCaseSection } from "@/shared/components/your-case-section";
import { FooterSection } from "@/shared/components/footer-section";
import { WhySection } from "@/shared/components/why-section";
import { Navbar } from "@/shared/components/navbar-section";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:1337/content-manager/collection-types/api::case-study.case-study";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const fetchCaseStudies = async (page: number = 1, pageSize: number = 10) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          page,
          pageSize,
          sort: "judul:ASC",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching case studies:", error);
      throw error;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    fetchCaseStudies()
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