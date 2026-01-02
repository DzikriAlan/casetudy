"use client"

import { ExploreSection } from "@/shared/components/explore-section";
import Image from "next/image"
import oneWhyImage from "@/shared/assets/img/landing/why/one-why.webp"
import twoWhyImage from "@/shared/assets/img/landing/why/two-why.webp"
import threeWhyImage from "@/shared/assets/img/landing/why/three-why.webp"
import fourWhyImage from "@/shared/assets/img/landing/why/four-why.webp"

export function WhySection() {
const whys = [
  [
    {
      image: oneWhyImage,
      title: "Learn from Real Work",
      description:
        "Every case study is based on real projects, so you learn how design decisions are made in real situations—not theory alone.",
      class: 'md:w-[55%]',
      positionContentLeft: '',
      positionContentRight: '',
      imageClass: ''
    },
    {
      image: twoWhyImage,
      title: "Structured, Step-by-Step",
      description:
        "Each case study follows a clear structure, helping you understand the process without feeling overwhelmed.",
      class: 'md:flex-1',
      positionContentLeft: '',
      positionContentRight: '',
      imageClass: '!max-h-[362px]'
    },
  ],
  [
    {
      image: threeWhyImage,
      title: "Focus on Decision-Making",
      description:
        "Casestudy highlights the reasoning behind design choices, not just the final visuals, so you can learn how to think like a designer.",
      class: 'md:flex md:flex-col md:flex-col-reverse md:flex-1 md:h-[503px] p-[32px]',
      positionContentLeft: '',
      positionContentRight: 'mt-0 flex justify-center',
      imageClass: ''
    },
    {
      image: fourWhyImage,
      title: "Easy to Explore",
      description:
        "You can quickly browse and open case studies to find topics and levels that match your current learning goals.",
      class: "md:w-[60%] md:h-[503px] p-[32px]",
      positionContentLeft: 'flex items-end',
      positionContentRight: 'mt-0',
      imageClass: '!max-h-[503px]'
    },
  ]
]

  return (
    <div>
      <ExploreSection 
        badgeText="Designed for Learning" 
        title="Why Casetudy" 
        description="Casetudy helps you learn UX and product design through clear, real-world case studies you can actually follow." 
      />
      <section className="bg-[#FBFBFD]">
        <div className="w-full pt-16 px-4 md:p-20 bg-white">
          <div className="flex flex-col gap-6">
              {whys.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="flex flex-col md:flex-row gap-6"
                >
                {row.map((why, whyIndex) => (
                    <div key={whyIndex} className={`bg-[#FBFBFD] px-[32px] pt-[32px] gap-[20px] flex flex-col md:flex-row h-full justify-between rounded-[28px] border border-[#C7C8CC] ${why.class || ''}`}>
                      <div className={`space-y-4 w-full md:w-[80%] ${why.positionContentLeft || ''}`}>
                        <div className="flex flex-col gap-4">
                          <h3 className="text-[26px] font-bold leading-[100%] text-[#151618]">
                            {why.title}
                          </h3>
                          <p className="max-w-[360px] text-[14px] font-normal leading-[20px] text-[#424345]">
                            {why.description}
                          </p>
                        </div>
                      </div>

                      <div className={`relative mt-10 w-full ${why.positionContentRight || ''}`}>
                        <Image
                          src={why.image}
                          alt={why.title}
                          className={`w-full max-w-[420px] ${why.imageClass || ''}`}
                        />
                      </div>
                    </div>
                ))}
              </div>
             ))}
          </div>
        </div>
        </section>
    </div>
  )
}