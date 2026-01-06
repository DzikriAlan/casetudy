"use client"
import Image from "next/image"
import xImg from '@/shared/assets/img/landing/socmed/x.webp'
import linkedinImg from "@/shared/assets/img/landing/socmed/linkedin.webp"
import instagramImg from '@/shared/assets/img/landing/socmed/instagram.webp'
import threadsImg from '@/shared/assets/img/landing/socmed/threads.webp'
import logoCasetudyWhite from "@/shared/assets/img/logo/logo-casetudy-white.webp"
import { useLanguage } from "@/shared/lib/i18n/LanguageContext"

export function SocmedSection() {
  const { t } = useLanguage()

  return (
    <footer className="relative bg-[#FE4F18] overflow-hidden my-3 rounded-2xl py-12 md:mx-8 md:py-16 lg:mx-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[70%]">
                <div className="flex items-center gap-2 mb-6">
                    <Image 
                    src={logoCasetudyWhite} 
                    alt=""
                    />
                </div>
                
                <p className="text-white text-base mb-8 max-w-md">{t("footerTagline")}</p>
                <p className="text-white text-sm opacity-90">{t("footerCopyright")}</p>
            </div>

            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:flex-1 lg:pl-12 lg:relative">
                <div className="absolute left-0 top-0 h-full w-[2px] hidden lg:block">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                </div>
                <nav className="flex flex-col items-center w-full gap-8 pt-8 pb-8 relative lg:h-full lg:items-start lg:justify-between lg:pt-0 lg:pb-0">
                    <div className="absolute left-0 top-0 w-full h-[2px] lg:hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    </div>
                    <button className="text-white text-lg hover:opacity-80 transition-opacity text-center lg:text-left">{t("caseStudies")}</button>
                    <button className="text-white text-lg hover:opacity-80 transition-opacity text-center lg:text-left">{t("whyUs")}</button>
                    <button className="text-white text-lg hover:opacity-80 transition-opacity text-center lg:text-left">{t("aboutCasetudy")}</button>
                    <button className="text-white text-lg hover:opacity-80 transition-opacity text-center lg:text-left">{t("uploadCaseStudy")}</button>
                </nav>
                <div className="relative flex flex-row items-center gap-4 pt-8 pb-8 lg:flex-col lg:pl-8 lg:pt-0 lg:pb-0">
                    <div className="absolute left-0 top-0 w-full h-[2px] lg:hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                    </div>
                    <div className="absolute left-0 top-0 h-full w-[2px] hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                    </div>
                    <div className="flex flex-row items-center gap-6 lg:flex-col">
                        <button className="w-10 h-10 rounded-full relative flex items-center justify-center hover:bg-white/10 transition-colors overflow-hidden">
                            <div className="absolute inset-0 opacity-70">
                                <svg className="w-full h-full" viewBox="0 0 40 40">
                                    <circle cx="20" cy="20" r="19.5" fill="none" stroke="white" strokeWidth="1"/>
                                </svg>
                            </div>
                            <Image src={linkedinImg} alt="" width={16} height={16} className="object-cover relative z-10" priority={false} />
                        </button>
                        <button className="w-10 h-10 rounded-full relative flex items-center justify-center hover:bg-white/10 transition-colors overflow-hidden">
                            <div className="absolute inset-0 opacity-70">
                                <svg className="w-full h-full" viewBox="0 0 40 40">
                                    <circle cx="20" cy="20" r="19.5" fill="none" stroke="white" strokeWidth="1"/>
                                </svg>
                            </div>
                            <Image src={xImg} alt="" width={16} height={16} className="object-cover relative z-10" priority={false} />
                        </button>
                        <button className="w-10 h-10 rounded-full relative flex items-center justify-center hover:bg-white/10 transition-colors overflow-hidden">
                            <div className="absolute inset-0 opacity-70">
                                <svg className="w-full h-full" viewBox="0 0 40 40">
                                    <circle cx="20" cy="20" r="19.5" fill="none" stroke="white" strokeWidth="1"/>
                                </svg>
                            </div>
                            <Image src={instagramImg} alt="" width={16} height={16} className="object-cover relative z-10" priority={false} />
                        </button>
                        <button className="w-10 h-10 rounded-full relative flex items-center justify-center hover:bg-white/10 transition-colors overflow-hidden">
                            <div className="absolute inset-0 opacity-70">
                                <svg className="w-full h-full" viewBox="0 0 40 40">
                                    <circle cx="20" cy="20" r="19.5" fill="none" stroke="white" strokeWidth="1"/>
                                </svg>
                            </div>
                            <Image src={threadsImg} alt="" width={16} height={16} className="object-cover relative z-10" priority={false} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}