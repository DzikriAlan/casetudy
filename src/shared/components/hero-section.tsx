"use client"
import Image from "next/image";
import dotImage from "@/shared/assets/img/decoration/dot.webp";
import { useLanguage } from "@/shared/lib/i18n/LanguageContext"

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative bg-[#FE4F18] overflow-hidden m-3 rounded-2xl">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={dotImage}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-32">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-24">
          <button className="w-full sm:w-auto bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all shadow-lg text-base md:text-lg">
            {t("exploreCaseStudies")}
          </button>
          <button className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all text-base md:text-lg">
            {t("uploadCaseStudy")}
          </button>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-white" style={{
            clipPath: "ellipse(100% 100% at 50% 100%)"
          }}></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
              <div className="space-y-4">
                <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border-2 border-orange-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="h-2 bg-orange-500 rounded-full flex-1"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border-2 border-orange-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border-2 border-orange-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="h-2 bg-orange-500 rounded-full flex-1"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border-2 border-orange-300"></div>
                    <div className="h-2 bg-orange-100 rounded-full flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <div className="h-3 bg-orange-500 rounded-full mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                    </div>
                    <div className="mt-4 h-20 bg-orange-100 rounded-lg"></div>
                  </div>
                  <div className="flex-1 border-l-2 border-dashed border-gray-200 pl-2">
                    <div className="h-3 bg-orange-500 rounded-full mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                    </div>
                    <div className="mt-4 border-2 border-dashed border-gray-300 rounded-lg p-3 flex items-center justify-center">
                      <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-8 bg-orange-500 rounded-r-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-gray-200 rounded-full w-1/4"></div>
                  <div className="h-2 bg-orange-500 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-gray-300 rounded-full w-1/3"></div>
                  <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-orange-300 rounded-full w-1/2"></div>
                  <div className="h-2 bg-orange-500 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-gray-200 rounded-full w-2/3"></div>
                  <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-orange-200 rounded-full w-1/4"></div>
                  <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 bg-gray-300 rounded-full w-1/2"></div>
                  <div className="h-2 bg-gray-200 rounded-full flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}