"use client"

import Image from "next/image";
import dotImage from "@/shared/assets/img/decoration/dot.webp";
import { StartCaseSection } from "@/shared/components/reusable/start-case-section";

export function YourCaseSection() {
  return (
    <section className="relative bg-[#FE4F18] overflow-hidden m-3 rounded-2xl px-6 py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={dotImage}
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <StartCaseSection 
        badgeText="Share Your Learning" 
        title="Your Case Study Matters"
        description="You don’t need a perfect project to contribute. Share what you’ve worked on and help others learn from real design processes, including your own."
        buttonText="Upload Case Study"
      />
    </section>
  )
  }