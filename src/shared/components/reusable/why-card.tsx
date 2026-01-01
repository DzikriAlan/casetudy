"use client"

import Image from "next/image"
import oneWhyImage from "@/shared/assets/img/one-why.png"
import twoWhyImage from "@/shared/assets/img/two-why.png"
import threeWhyImage from "@/shared/assets/img/three-why.png"
import fourWhyImage from "@/shared/assets/img/four-why.png"

export function WhyCard() {
  const whys = [
    [
      {
        image: oneWhyImage,
        title: "Learn from Real Work",
        description:
          "Every case study is based on real projects, so you learn how design decisions are made in real situations—not theory alone.",
        desktopClass: "md:w-[55%] md:h-[388px]",
        contentPosition: "top",
        imageClass: "ml-auto max-w-[360px]",
      },
      {
        image: twoWhyImage,
        title: "Structured, Step-by-Step",
        description:
          "Each case study follows a clear structure, helping you understand the process without feeling overwhelmed.",
        desktopClass: "md:h-[388px] md:flex-1",
        contentPosition: "top",
        imageClass: "ml-auto max-w-[360px]",
      },
    ],
    [
      {
        image: threeWhyImage,
        title: "Focus on Decision-Making",
        description:
          "Casestudy highlights the reasoning behind design choices, not just the final visuals, so you can learn how to think like a designer.",
        desktopClass: "md:h-[388px] md:flex-1",
        contentPosition: "bottom",
        imageClass: "mx-auto max-w-[420px]",
      },
      {
        image: fourWhyImage,
        title: "Easy to Explore",
        description:
          "You can quickly browse and open case studies to find topics and levels that match your current learning goals.",
        desktopClass: "md:w-[55%]  md:h-[388px]",
        contentPosition: "bottom",
        imageClass: "ml-auto max-w-[360px]",
      },
    ],
  ]

  return (
    <div>
      <section className="px-4 py-12 md:px-20 md:py-24">
        <div className="flex flex-col gap-6">
          {whys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-6">
              {row.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-[#C7C8CC] bg-[#FBFBFD] p-8 ${item.desktopClass}`}
                >
                  {item.contentPosition === "top" && (
                    <div className="space-y-4">
                      <h3 className="text-[26px] font-bold leading-[100%] text-[#151618]">
                        {item.title}
                      </h3>
                      <p className="max-w-[360px] text-[14px] leading-[20px] text-[#424345]">
                        {item.description}
                      </p>
                    </div>
                  )}

                  <div className="relative mt-8 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className={item.imageClass}
                    />
                  </div>

                  {item.contentPosition === "bottom" && (
                    <div className="mt-8 space-y-4">
                      <h3 className="text-[26px] font-bold leading-[100%] text-[#151618]">
                        {item.title}
                      </h3>
                      <p className="max-w-[360px] text-[14px] leading-[20px] text-[#424345]">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
