"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/shared/components/navbar-section";
import { FooterSection } from "@/shared/components/footer-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
import { Icon } from "@iconify/react";
import { useCaseStudiesHooks } from "@/features/case-studies/hooks/caseStudiesHooks";

export default function ExplorePage() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { caseStudies } = useCaseStudiesHooks();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className="bg-white min-h-screen">
            <div
                className={`fixed px-3 py-4 z-40 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <Navbar />
            </div>

            <main className="pt-32 md:pt-40 pb-4">
                {/* Header Section */}
                <div className="text-center px-4 max-w-6xl mx-auto w-full">
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#1A1A1A] mb-4">
                        Explore UX Case Studies
                    </h1>
                    <p className="text-[#6B6B6B] text-[16px] md:text-[20px] mb-12">
                        Browse real design case studies to learn how decisions are made in practice.
                    </p>

                    <div className="w-full flex-col md:flex-row flex gap-4 mb-4">
                        {/* Search Input on Mobile is row 1, Filter/Sort is row 2 */}
                        <div className="flex w-full md:hidden bg-white border border-[#E6E6E6] rounded-xl p-[6px] shadow-sm">
                            <input
                                type="text"
                                placeholder="Search case studies"
                                className="w-full px-4 outline-none text-[#1A1A1A] placeholder:text-[#999999] bg-transparent"
                            />
                            <button className="bg-[#FE4F18] text-white px-6 py-[14px] font-semibold rounded-lg text-sm">
                                Search
                            </button>
                        </div>

                        <div className="flex w-full gap-4 md:hidden">
                            <button className="flex-1 flex items-center justify-center gap-2 py-[16px] bg-[#F4F4F5] rounded-xl font-medium text-[#52525B]">
                                <Icon icon="octicon:sliders-16" width="18" height="18" />
                                Filter
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-[16px] bg-[#F4F4F5] rounded-xl font-medium text-[#52525B]">
                                <Icon icon="lucide:list-filter" width="18" height="18" />
                                Sort by
                            </button>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:flex w-full gap-4 items-center h-[60px]">
                            <button className="h-full flex items-center justify-center gap-2 px-8 bg-[#F4F4F5] hover:bg-[#E4E4E5] transition-colors rounded-xl font-medium text-[#52525B]">
                                <Icon icon="octicon:sliders-16" width="18" height="18" />
                                Filter
                            </button>

                            <div className="flex-1 h-full flex bg-white border border-[#E6E6E6] rounded-xl p-[6px] focus-within:border-[#FE4F18] transition-colors">
                                <input
                                    type="text"
                                    placeholder="Search case studies"
                                    className="w-full px-5 py-2 outline-none text-[#1A1A1A] placeholder:text-[#999999] rounded-l-xl bg-transparent"
                                />
                                <button className="bg-[#FE4F18] hover:bg-[#E54515] transition-colors text-white px-10 h-full font-semibold rounded-lg">
                                    Search
                                </button>
                            </div>

                            <button className="h-full flex items-center justify-center gap-2 px-8 bg-[#F4F4F5] hover:bg-[#E4E4E5] transition-colors rounded-xl font-medium text-[#52525B]">
                                <Icon icon="lucide:list-filter" width="18" height="18" />
                                Sort by
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <div className="w-full">
                <ListPorto
                    hideExploreSection={true}
                    showEndOfList={true}
                    showViewAllButton={false}
                    data={caseStudies.data}
                    isLoading={caseStudies.isLoading}
                    isError={caseStudies.isError}
                />
            </div>

            <FooterSection />
        </div>
    );
}
