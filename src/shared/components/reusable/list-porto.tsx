"use client"

import { Icon } from '@iconify/react';
import Image from "next/image"
import { ExploreSection } from "@/shared/components/explore-section";
import oneImg from "@/shared/assets/img/landing/porto/one.webp";
import twoImg from "@/shared/assets/img/landing/porto/two.webp";
import threeImg from "@/shared/assets/img/landing/porto/three.webp";
import fourImg from "@/shared/assets/img/landing/porto/four.webp";
import fiveImg from "@/shared/assets/img/landing/porto/five.webp";
import sixImg from "@/shared/assets/img/landing/porto/six.webp";
import sevenImg from "@/shared/assets/img/landing/porto/seven.webp";
import eightImg from "@/shared/assets/img/landing/porto/eight.webp";
import { useLanguage } from "@/shared/lib/i18n/LanguageContext"

export function ListPorto() {
  const { t, language } = useLanguage();

  const portfolios = [
    {
      title: { en: "Improving Checkout Flow Mobile App", id: "Meningkatkan Alur Checkout Aplikasi Mobile" },
      description: { en: "Improving completion rate through clearer flow and hierarchy.", id: "Meningkatkan tingkat penyelesaian melalui alur dan hierarki yang lebih jelas." },
      tags: [
        { en: "Onboarding", id: "Onboarding" },
        { en: "User Research", id: "Riset Pengguna" }
      ],
      author: "John Dukes",
      role: { en: "Product Designer", id: "Desainer Produk" },
      level: { name: { en: "Intermediate", id: "Menengah" }, icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
      image: oneImg,
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
    },
    {
      title: { en: "Redesigning Checkout Experience for E-commerce", id: "Mendesain Ulang Pengalaman Checkout untuk E-commerce" },
      description: { en: "Simplifying complex steps to increase conversion rate.", id: "Menyederhanakan langkah-langkah kompleks untuk meningkatkan tingkat konversi." },
      tags: [
        { en: "UX Flow", id: "Alur UX" },
        { en: "Usability Testing", id: "Pengujian Kegunaan" }
      ],
      author: "Eddie Lake",
      role: { en: "UX Designer", id: "Desainer UX" },
      level: { name: { en: "Intermediate", id: "Menengah" }, icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
      image: twoImg,
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop"
    },
    {
      title: { en: "Building a Consistent UI for SaaS Dashboard", id: "Membangun UI Konsisten untuk Dashboard SaaS" },
      description: { en: "Aligning components to reduce design inconsistency.", id: "Menyelaraskan komponen untuk mengurangi ketidakkonsistenan desain." },
      tags: [
        { en: "Design System", id: "Sistem Desain" },
        { en: "UI Design", id: "Desain UI" }
      ],
      author: "Stephanie Sharkey",
      role: { en: "UI Designer", id: "Desainer UI" },
      level: { name: { en: "Beginner", id: "Pemula" }, icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
      image: threeImg,
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
    },
    {
      title: { en: "Optimizing First-Time User Experience in Fintech App", id: "Mengoptimalkan Pengalaman Pengguna Pertama Kali di Aplikasi Fintech" },
      description: { en: "Helping new users understand key features faster.", id: "Membantu pengguna baru memahami fitur kunci dengan lebih cepat." },
      tags: [
        { en: "First-Time UX", id: "UX Pengguna Pertama" },
        { en: "Interaction Design", id: "Desain Interaksi" }
      ],
      author: "Jerry Helfer",
      role: { en: "UX/UI Designer", id: "Desainer UX/UI" },
      level: { name: { en: "Advanced", id: "Lanjutan" }, icon: 'bg-[#22BE7B]', background: 'bg-[#DFF4E5]', color: 'text-[#1B734C]' },
      image: fourImg,
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
      title: { en: "Auditing User Flow for Clarity", id: "Audit Alur Pengguna untuk Kejelasan" },
      description: { en: "Identifying key friction points in user flows and improving them step by step.", id: "Mengidentifikasi titik gesekan utama dalam alur pengguna dan memperbaikinya langkah demi langkah." },
      tags: [
        { en: "User Flow", id: "Alur Pengguna" },
        { en: "UX Analysis", id: "Analisis UX" }
      ],
      author: "Rina Mahesa",
      role: { en: "Product Designer", id: "Desainer Produk" },
      level: { name: { en: "Beginner", id: "Pemula" }, icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
      image: fiveImg,
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
    },
    {
      title: { en: "Simplifying Onboarding for New Users", id: "Menyederhanakan Onboarding untuk Pengguna Baru" },
      description: { en: "Simplifying onboarding so users understand what to do from the first interaction.", id: "Menyederhanakan onboarding agar pengguna memahami apa yang harus dilakukan dari interaksi pertama." },
      tags: [
        { en: "Onboarding", id: "Onboarding" },
        { en: "UX Writing", id: "Penulisan UX" }
      ],
      author: "Dimas Putra",
      role: { en: "UX Writing", id: "Penulis UX" },
      level: { name: { en: "Intermediate", id: "Menengah" }, icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
      image: sixImg,
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop"
    },
    {
      title: { en: "Making Design Decisions with Research", id: "Membuat Keputusan Desain dengan Riset" },
      description: { en: "Making design decisions based on user insights and validated data.", id: "Membuat keputusan desain berdasarkan wawasan pengguna dan data yang tervalidasi." },
      tags: [
        { en: "UX Strategy", id: "Strategi UX" },
        { en: "Research", id: "Riset" }
      ],
      author: "Sarah Wulandari",
      role: { en: "UX Researcher", id: "Peneliti UX" },
      level: { name: { en: "Beginner", id: "Pemula" }, icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
      image: sevenImg,
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop"
    },
    {
      title: { en: "Improving Mobile Checkout User Experience", id: "Meningkatkan Pengalaman Pengguna Checkout Mobile" },
      description: { en: "Reducing drop-offs in mobile checkout through better UI hierarchy.", id: "Mengurangi tingkat pembatalan di checkout mobile melalui hierarki UI yang lebih baik." },
      tags: [
        { en: "Mobile UX", id: "UX Mobile" },
        { en: "UI Design", id: "Desain UI" }
      ],
      author: "Fajar Nugroho",
      role: { en: "UI Designer", id: "Desainer UI" },
      level: { name: { en: "Advanced", id: "Lanjutan" }, icon: 'bg-[#22BE7B]', background: 'bg-[#DFF4E5]', color: 'text-[#1B734C]' },
      image: eightImg,
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop"
    }
  ]

  return (
    <div>
      <ExploreSection 
        badgeText={t("listPortoBadgeText")}
        title={t("listPortoTitle")}
        description={t("listPortoDescription")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] py-12 md:py-24 px-4 md:px-20">
        {portfolios.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow"
          >
            <div className="relative h-[300px] md:h-[300px] bg-gray-100">
              <Image
                src={item.image}
                alt={item.title[language]}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-start self-stretch p-[14px] bg-[#FBFBFD]">
              <h3 className="text-[#1A1A1A] text-lg font-bold leading-[28px] mb-3 line-clamp-2 min-h-[56px]">
                {item.title[language]}
              </h3>
              <p className="text-[#6B6B6B] text-[14px] font-[400] leading-[20px] line-clamp-2 min-h-[56px]">
                {item.description[language]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs md:text-sm">
                    {tag[language]}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-dashed border-[#E6E6E6] w-full">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={item.authorImage}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.author}</p>
                    <p className="text-xs text-gray-500">{item.role[language]}</p>
                  </div>
                </div>
                <span
                  className={`text-xs p-2 rounded-full flex items-center gap-2 ${item?.level?.background} ${item?.level?.color}`}
                >
                  <span className={`flex items-center justify-center rounded-full h-[22px] w-[22px] ${item?.level?.icon}`}>
                    <Icon icon="rivet-icons:lightning" width="10" height="10" className='text-white' />
                  </span> 
                  {item.level.name[language]}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}