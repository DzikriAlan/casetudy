"use client"

import { ExploreSection } from "@/shared/components/explore-section";
// import Image from "next/image"
// import oneWhyImage from "@/shared/assets/img/one-why.png"
// import twoWhyImage from "@/shared/assets/img/two-why.png"
// import threeWhyImage from "@/shared/assets/img/three-why.png"
// import fourWhyImage from "@/shared/assets/img/four-why.png"

export function WhyCard() {
  // const whys = [
  //   {
  //     image: oneWhyImage,
  //     title: "Learn from Real Work",
  //     description:
  //       "Every case study is based on real projects, so you learn how design decisions are made in real situations—not theory alone.",
  //   },
  //   {
  //     image: twoWhyImage,
  //     title: "Structured, Step-by-Step",
  //     description:
  //       "Each case study follows a clear structure, helping you understand the process without feeling overwhelmed.",
  //   },
  //   {
  //     image: threeWhyImage,
  //     title: "Focus on Decision-Making",
  //     description:
  //       "Casestudy highlights the reasoning behind design choices, not just the final visuals, so you can learn how to think like a designer.",
  //   },
  //   {
  //     image: fourWhyImage,
  //     title: "Easy to Explore",
  //     description:
  //       "You can quickly browse and open case studies to find topics and levels that match your current learning goals.",
  //   },
  // ]

  return (
    <div>
      <ExploreSection 
        badgeText="Designed for Learning" 
        title="Why Casetudy" 
        description="Casetudy helps you learn UX and product design through clear, real-world case studies you can actually follow." 
      />
      {/* <section className="bg-[#FBFBFD]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {whys.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[28px] border border-[#C7C8CC] bg-[#FBFBFD] p-8"
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-[26px] font-bold leading-[100%] text-[#151618]">
                      {item.title}
                    </h3>
                    <p className="max-w-[360px] text-[14px] font-normal leading-[20px] text-[#424345]">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative mt-10 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="mx-auto w-full max-w-[420px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}
