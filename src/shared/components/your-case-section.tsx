"use client"
import Image from "next/image";
import dotImage from "@/shared/assets/img/decoration/dot.webp";
import { StartCaseSection } from "@/shared/components/reusable/start-case-section";
import { useLanguage } from "@/shared/lib/i18n/LanguageContext";

export function YourCaseSection() {
  const { t } = useLanguage();

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
        badgeText={t("yourCaseBadgeText")}
        title={t("yourCaseTitle")}
        description={t("yourCaseDescription")}
        buttonText={t("uploadCaseStudy")}
      />
    </section>
  )
}