"use client"

import { ExploreSection } from "@/shared/components/explore-section";
import Image from "next/image"
import oneWhyImage from "@/shared/assets/img/landing/why/one-why.webp"
import twoWhyImage from "@/shared/assets/img/landing/why/two-why.webp"
import threeWhyImage from "@/shared/assets/img/landing/why/three-why.webp"
import fourWhyImage from "@/shared/assets/img/landing/why/four-why.webp"
import { useLanguage } from "@/shared/lib/i18n/LanguageContext"

export function WhySection() {
  const { t, language } = useLanguage();

  const whys = [
    [
      {
        image: oneWhyImage,
        title: { en: "Learn from Real Work", id: "Belajar dari Pekerjaan Nyata" },
        description: { en: "Every case study is based on real projects, so you learn how design decisions are made in real situations—not theory alone.", id: "Setiap studi kasus didasarkan pada proyek nyata, sehingga Anda belajar bagaimana keputusan desain dibuat dalam situasi nyata—bukan hanya teori." },
        class: 'md:w-[55%]',
        positionContentLeft: '',
        positionContentRight: '',
        imageClass: ''
      },
      {
        image: twoWhyImage,
        title: { en: "Structured, Step-by-Step", id: "Terstruktur, Langkah demi Langkah" },
        description: { en: "Each case study follows a clear structure, helping you understand the process without feeling overwhelmed.", id: "Setiap studi kasus mengikuti struktur yang jelas, membantu Anda memahami prosesnya tanpa merasa kewalahan." },
        class: 'md:flex-1',
        positionContentLeft: '',
        positionContentRight: '',
        imageClass: '!max-h-[362px]'
      },
    ],
    [
      {
        image: threeWhyImage,
        title: { en: "Focus on Decision-Making", id: "Fokus pada Pengambilan Keputusan" },
        description: { en: "Casestudy highlights the reasoning behind design choices, not just the final visuals, so you can learn how to think like a designer.", id: "Casestudy menyoroti alasan di balik pilihan desain, bukan hanya visual akhir, sehingga Anda dapat belajar berpikir seperti desainer." },
        class: 'md:flex md:flex-col md:flex-col-reverse md:flex-1 md:h-[503px] p-[32px]',
        positionContentLeft: '',
        positionContentRight: 'mt-0 flex justify-center',
        imageClass: ''
      },
      {
        image: fourWhyImage,
        title: { en: "Easy to Explore", id: "Mudah Dijelajahi" },
        description: { en: "You can quickly browse and open case studies to find topics and levels that match your current learning goals.", id: "Anda dapat dengan cepat menjelajahi dan membuka studi kasus untuk menemukan topik dan level yang sesuai dengan tujuan pembelajaran Anda saat ini." },
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
        badgeText={t("whyBadgeText")}
        title={t("whyTitle")}
        description={t("whyDescription")}
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
                            {why.title[language]}
                          </h3>
                          <p className="max-w-[360px] text-[14px] font-normal leading-[20px] text-[#424345]">
                            {why.description[language]}
                          </p>
                        </div>
                      </div>

                      <div className={`relative mt-10 w-full ${why.positionContentRight || ''}`}>
                        <Image
                          src={why.image}
                          alt={why.title[language]}
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