
"use client"

export function ExploreSection() {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-24 px-4 md:px-20 bg-white">
            {/* Left: Button & Title */}
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
                <button
                    className="mb-6 md:mb-8 px-6 py-2 rounded-2xl bg-gradient-to-b from-[#FFE5DB] to-[#FFF6F2] text-[#FF5C1B] font-medium text-base shadow-md hover:brightness-95 transition"
                >
                    Start with Real Examples
                </button>
                <h2 className="text-4xl md:text-6xl font-bold text-black text-center md:text-left leading-tight md:leading-[1.1]">
                    Featured Case Studies
                </h2>
            </div>
            {/* Right: Description */}
            <div className="mt-8 md:mt-0 w-full md:w-1/2 flex items-center justify-center md:justify-end">
                <p className="max-w-lg text-lg md:text-xl text-gray-600 text-center md:text-left pt-4">
                    Explore selected case studies to see how real UX and product problems are approached, explored, and solved.
                </p>
            </div>
        </section>
        )
}