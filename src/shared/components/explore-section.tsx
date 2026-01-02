"use client"
type ExploreSectionProps = Readonly<{
  badgeText: string
  title: string
  description: string
}>

export function ExploreSection({
  badgeText,
  title,
  description,
}: ExploreSectionProps) {
  return (
    <section className="w-full pt-16 px-4 md:px-20 bg-white">
      <div className="mb-6 flex items-center justify-center md:justify-start">
        <button className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-[40px] border border-[#CF4418]/20 bg-gradient-to-b from-[#CF4418]/20 to-white shadow-[0_2px_8px_rgba(207,68,24,0.25),inset_0_1.5px_2px_rgba(207,68,24,0.2)] text-[#CF4418] text-sm">
          {badgeText}
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center md:justify-start md:w-[60%] mb-4 md:mb-0">
          <h2 className="text-4xl md:text-6xl font-bold text-black text-center md:text-left leading-tight md:leading-[1.1]">
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-center md:justify-end md:self-center">
          <p className="md:w-[70%] text-lg md:text-xl text-gray-600 text-center md:text-left">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
