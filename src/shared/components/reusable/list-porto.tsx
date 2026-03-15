"use client"

import { Icon } from '@iconify/react';
import Image from "next/image"

import { useRouter } from "next/navigation"
import { ExploreSection } from "@/shared/components/explore-section";
import { useLanguage } from "@/shared/lib/i18n/LanguageContext"

interface ListPortoProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any[];
  isLoading?: boolean;
  isError?: boolean;
  showViewAllButton?: boolean;
  showEndOfList?: boolean;
  hideExploreSection?: boolean;
}

const rankStyleMap: Record<string, { background: string; color: string; icon: string; label: { en: string; id: string } }> = {
  Beginner: { background: 'bg-[#E8F5E9]', color: 'text-[#2E7D32]', icon: 'bg-[#4CAF50]', label: { en: 'Beginner', id: 'Pemula' } },
  Intermediate: { background: 'bg-[#FFF3E0]', color: 'text-[#E65100]', icon: 'bg-[#FF9800]', label: { en: 'Intermediate', id: 'Menengah' } },
  Advanced: { background: 'bg-[#EDE7F6]', color: 'text-[#4527A0]', icon: 'bg-[#7E57C2]', label: { en: 'Advanced', id: 'Mahir' } },
};


export function ListPorto({ showViewAllButton = false, showEndOfList = false, hideExploreSection = false, data = [], isLoading = false, isError = false }: ListPortoProps = {}) {
  const { t, language } = useLanguage();
  const router = useRouter();

  let content;

  if (isLoading) {
    content = Array.from({ length: 8 }, (_, i) => `skeleton-${i}`).map((skeletonKey) => (
      <div
        key={skeletonKey}
        className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse"
      >
        <div className="relative h-[300px] md:h-[300px] bg-gray-200"></div>

        <div className="flex flex-col items-start self-stretch p-[14px] bg-[#FBFBFD] h-full">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>

          <div className="h-4 bg-gray-200 rounded w-full mb-1 mt-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-1"></div>

          <div className="flex flex-wrap gap-2 mb-4 mt-6">
            <div className="h-5 bg-gray-200 rounded-full w-16"></div>
            <div className="h-5 bg-gray-200 rounded-full w-20"></div>
            <div className="h-5 bg-gray-200 rounded-full w-14"></div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-dashed border-[#E6E6E6] w-full mt-auto">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="flex flex-col gap-1">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-3 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
            <div className="h-8 bg-gray-200 rounded-full w-24 flex-shrink-0"></div>
          </div>
        </div>
      </div>
    ));
  } else if (isError) {
    content = (
      <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-center justify-center py-16 text-center">
        <Icon icon="lucide:alert-circle" width="48" height="48" className="text-red-500 mb-4" />
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
          {language === 'en' ? 'Failed to load case studies' : 'Gagal memuat studi kasus'}
        </h3>
        <p className="text-[#6B6B6B]">
          {language === 'en' ? 'Please try again later or refresh the page.' : 'Silakan coba lagi nanti atau muat ulang halaman.'}
        </p>
      </div>
    );
  } else if (data.length === 0) {
    content = (
      <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-center justify-center py-16 text-center">
        <Icon icon="lucide:folder-search" width="48" height="48" className="text-gray-400 mb-4" />
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
          {language === 'en' ? 'No case studies found' : 'Tidak ada studi kasus yang ditemukan'}
        </h3>
        <p className="text-[#6B6B6B]">
          {language === 'en' ? 'Check back later for new updates.' : 'Cek kembali nanti untuk pembaruan terbaru.'}
        </p>
      </div>
    );
  } else {
    content = data.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow"
      >
        <div className="relative h-[300px] md:h-[300px] bg-gray-100">
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col items-start self-stretch p-[14px] bg-[#FBFBFD]">
          <h3 className="text-[#1A1A1A] text-lg font-bold leading-[28px] mb-3 line-clamp-2 min-h-[56px]">
            {item.title}
          </h3>
          <p className="text-[#6B6B6B] text-[14px] font-[400] leading-[20px] line-clamp-2 min-h-[56px]">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4 mt-4">
            {item.tag?.map((tag: string) => (
              <span key={tag} className="text-xs md:text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-dashed border-[#E6E6E6] w-full mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FE4F18] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-semibold">
                  {item.username?.split(" ").map((w: string) => w.charAt(0).toUpperCase()).join("").slice(0, 2) ?? ""}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{item.username}</p>
                <p className="text-xs text-gray-500">{item.job}</p>
              </div>
            </div>
            {(() => {
              const rank = rankStyleMap[item.rank] ?? rankStyleMap['Beginner'];
              return (
                <span className={`text-xs p-2 rounded-full flex items-center gap-2 ${rank.background} ${rank.color}`}>
                  <span className={`flex items-center justify-center rounded-full h-[22px] w-[22px] ${rank.icon}`}>
                    <Icon icon="rivet-icons:lightning" width="10" height="10" className='text-white' />
                  </span>
                  {rank.label[language]}
                </span>
              );
            })()}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div>
      {!hideExploreSection && (
        <ExploreSection
          badgeText={t("listPortoBadgeText")}
          title={t("listPortoTitle")}
          description={t("listPortoDescription")}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] py-12 md:py-24 px-4 md:px-20">
        {content}
      </div>

      {showViewAllButton && data.length > 0 && !isLoading && !isError && (
        <div className="flex justify-center mt-2 pb-16">
          <button
            onClick={() => router.push('/explore')}
            className="bg-[#FE4F18] hover:bg-[#E54515] text-white px-8 py-4 rounded-xl font-medium transition-colors cursor-pointer text-[16px]"
          >
            {language === 'en' ? 'View All Case Studies' : 'Lihat Semua Studi Kasus'}
          </button>
        </div>
      )}

      {showEndOfList && data.length > 0 && !isLoading && !isError && (
        <div className="flex flex-col items-center mt-8 pb-16 gap-6">
          <p className="text-[#A1A1AA] text-[18px]">
            {language === 'en' ? "You've reached the end of the list" : "Anda telah mencapai akhir daftar"}
          </p>
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 bg-[#F4F4F5] hover:bg-[#E4E4E5] text-[#52525B] px-6 py-4 rounded-xl font-medium transition-colors cursor-pointer text-[16px]"
          >
            <Icon icon="lucide:arrow-up" width="20" height="20" />
            {language === 'en' ? 'Back to top' : 'Kembali ke atas'}
          </button>
        </div>
      )}
    </div>
  );
}