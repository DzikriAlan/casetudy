"use client"

import Image from "next/image";
import dotImage from "@/shared/assets/img/decoration/dot.webp";
import { StartCaseSection } from "./reusable/start-case-section";
import { SocmedSection } from "./reusable/socmed-section";
import { useLanguage } from "@/shared/lib/i18n/LanguageContext";

export function FooterSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#FE4F18] overflow-hidden m-3 rounded-2xl px-6 py-20 md:py-32 lg:py-40 mt-10">
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
        badgeText={t("footerBadgeText")}
        title={t("footerTitle")}
        description={t("footerDescription")}
        buttonText={t("uploadCaseStudy")}
      />
      <SocmedSection />
    </section>
  )
}