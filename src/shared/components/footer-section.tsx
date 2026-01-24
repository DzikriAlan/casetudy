"use client"
import Image from "next/image";
import dotImage from "@/shared/assets/img/decoration/dot.webp";
import titleImage from "@/shared/assets/img/landing/footer/image.webp";
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
      <div className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[200px] lg:h-[250px] pointer-events-none">
        <Image
          src={titleImage}
          alt=""
          fill
          className="object-contain object-bottom [transform:scale(0.8)] md:[transform:scale(0.85)] lg:[transform:scale(0.9)] origin-bottom w-full"
          priority={false}
        />
      </div>
    </section>
  )
}