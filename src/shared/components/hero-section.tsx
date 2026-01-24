"use client"
import Image from "next/image";
import dotImage from "@/shared/assets/img/decoration/dot.webp";
import { useLanguage } from "@/shared/lib/i18n/LanguageContext"
import hero1Image from "@/shared/assets/img/decoration/hero-section/hero-1.webp";
import hero2Image from "@/shared/assets/img/decoration/hero-section/hero-2.webp";
import hero3Image from "@/shared/assets/img/decoration/hero-section/hero-3.webp";

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative bg-[#FE4F18] overflow-hidden m-3 rounded-2xl">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={dotImage}
          alt=""
          fill
          className="object-cover scale-110"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-0">
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-white text-orange-600 px-6 py-2 rounded-full text-sm font-medium shadow-lg">
            {t("learnFromRealCaseStudies")}
          </div>
        </div>
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            {t("understandUXThrough")}
            <br />
            {t("realWorldPractice")}
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            {t("heroDescription")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20">
          <button className="w-full sm:w-auto bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all shadow-lg text-base md:text-lg">
            {t("exploreCaseStudies")}
          </button>
          <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all text-base md:text-lg">
            {t("uploadCaseStudy")}
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-end gap-0 sm:gap-4 md:gap-0 max-w-6xl mx-auto px-0 sm:px-4 overflow-visible">
        <div className="relative scale-125 right-10 sm:right-0 md:right-[120px]">
          <Image
            src={hero1Image}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="relative z-10 scale-125 top-2 md:top-3">
          <Image
            src={hero2Image}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="relative scale-125 left-10 sm:left-0 md:left-[120px]">
          <Image
            src={hero3Image}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}