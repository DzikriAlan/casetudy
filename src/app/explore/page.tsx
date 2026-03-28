"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Navbar } from "@/shared/components/navbar-section";
import { FooterSection } from "@/shared/components/footer-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
import { useCaseStudiesHooks } from "@/features/case-studies/hooks/caseStudiesHooks";

const SORT_OPTIONS = [
    { label: "Terbaru", value: "newest" },
    { label: "Terlama", value: "oldest" },
];

type OpenPanel = "filter" | "sort" | null;

export default function ExplorePage() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
    const [searchInput, setSearchInput] = useState("");

    // Refs unified to single instances
    const filterRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);

    const { caseStudies, payloadCaseStudies, setPayloadCaseStudies } = useCaseStudiesHooks();

    let activeCategories: string[];
    if (Array.isArray(payloadCaseStudies.category)) activeCategories = payloadCaseStudies.category;
    else if (payloadCaseStudies.category) activeCategories = [payloadCaseStudies.category];
    else activeCategories = [];

    const activeSortLabel = SORT_OPTIONS.find(o => o.value === payloadCaseStudies.sort)?.label ?? "Terbaru";

    let filterLabel: string;
    if (activeCategories.length === 0) filterLabel = "Filter";
    else if (activeCategories.length === 1) filterLabel = activeCategories[0];
    else filterLabel = `Filter (${activeCategories.length})`;

    // Unified Click Outside Handler
    useEffect(() => {
        if (!openPanel) return;

        const handler = (e: MouseEvent) => {
            const target = e.target as Node;
            let isInside = false;

            if (openPanel === "filter") {
                isInside = filterRef.current?.contains(target) ?? false;
            } else if (openPanel === "sort") {
                isInside = sortRef.current?.contains(target) ?? false;
            }

            if (!isInside) setOpenPanel(null);
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [openPanel]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleSearch = () => {
        setPayloadCaseStudies(prev => ({ ...prev, page: 1, search: searchInput.trim() || undefined }));
    };

    const handleToggleCategory = (category: string) => {
        setPayloadCaseStudies(prev => {
            let current: string[];
            if (Array.isArray(prev.category)) current = prev.category;
            else if (prev.category) current = [prev.category];
            else current = [];
            const next = current.includes(category)
                ? current.filter(c => c !== category)
                : [...current, category];
            return { ...prev, page: 1, category: next.length > 0 ? next : undefined };
        });
    };

    const handleClearCategories = () => {
        setPayloadCaseStudies(prev => ({ ...prev, page: 1, category: undefined }));
        setOpenPanel(null);
    };

    const handleSelectSort = (sort: string) => {
        setPayloadCaseStudies(prev => ({ ...prev, page: 1, sort }));
        setOpenPanel(null);
    };

    const categoryDropdown = (
        <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#E6E6E6] z-50 py-1">
            <button
                onClick={handleClearCategories}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-[#F4F4F5] transition-colors flex items-center justify-between ${activeCategories.length === 0 ? "text-[#FE4F18] font-semibold" : "text-[#1A1A1A]"}`}
            >
                Semua Kategori
                {activeCategories.length === 0 && <Icon icon="lucide:check" width="14" height="14" />}
            </button>
            {caseStudies.categories.map(cat => {
                const isSelected = activeCategories.includes(cat);
                return (
                    <button
                        key={cat}
                        onClick={() => handleToggleCategory(cat)}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-[#F4F4F5] transition-colors flex items-center justify-between ${isSelected ? "text-[#FE4F18] font-semibold" : "text-[#1A1A1A]"}`}
                    >
                        {cat}
                        {isSelected && <Icon icon="lucide:check" width="14" height="14" />}
                    </button>
                );
            })}
        </div>
    );

    const sortDropdown = (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg border border-[#E6E6E6] z-50 py-1">
            {SORT_OPTIONS.map(opt => (
                <button
                    key={opt.value}
                    onClick={() => handleSelectSort(opt.value)}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-[#F4F4F5] transition-colors flex items-center justify-between ${payloadCaseStudies.sort === opt.value ? "text-[#FE4F18] font-semibold" : "text-[#1A1A1A]"}`}
                >
                    {opt.label}
                    {payloadCaseStudies.sort === opt.value && <Icon icon="lucide:check" width="14" height="14" />}
                </button>
            ))}
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            <div className={`fixed px-3 py-4 z-40 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <Navbar />
            </div>

            <main className="relative z-10 pt-32 md:pt-40 pb-4">
                <div className="text-center px-4 max-w-6xl mx-auto w-full">
                    <h1 className="text-[36px] md:text-[56px] font-bold text-[#1A1A1A] mb-4">
                        Explore UX Case Studies
                    </h1>
                    <p className="text-[#6B6B6B] text-[16px] md:text-[20px] mb-12">
                        Browse real design case studies to learn how decisions are made in practice.
                    </p>

                    {/* Filter Bar */}
                    <div className="w-full flex flex-wrap md:flex-nowrap gap-3 md:gap-4 mb-4 md:h-[60px]">

                        {/* Filter — row 2 left on mobile, leftmost on desktop */}
                        <div ref={filterRef} className="flex-1 md:flex-initial order-2 md:order-1 relative">
                            <button
                                onClick={() => setOpenPanel(p => p === "filter" ? null : "filter")}
                                className={`w-full md:h-[60px] flex items-center justify-center gap-2 px-4 md:px-8 py-[16px] md:py-0 rounded-xl font-medium transition-colors ${activeCategories.length > 0 ? "bg-[#FE4F18] text-white" : "bg-[#F4F4F5] hover:bg-[#E4E4E5] text-[#52525B]"}`}
                            >
                                <Icon icon="octicon:sliders-16" width="18" height="18" />
                                <span className="whitespace-nowrap">{filterLabel}</span>
                            </button>
                            {openPanel === "filter" && categoryDropdown}
                        </div>

                        {/* Search — row 1 on mobile, center on desktop */}
                        <div className="w-full md:flex-1 order-1 md:order-2 md:h-[60px] flex bg-white border border-[#E6E6E6] rounded-xl p-[6px] shadow-sm focus-within:border-[#FE4F18] transition-colors">
                            <input
                                type="text"
                                placeholder="Search case studies"
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                onKeyDown={e => e.key === "Enter" && handleSearch()}
                                className="w-full px-4 md:px-5 py-2 outline-none text-[#1A1A1A] placeholder:text-[#999999] bg-transparent"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-[#FE4F18] hover:bg-[#E54515] transition-colors text-white px-6 md:px-10 py-[14px] md:py-0 font-semibold rounded-lg text-sm md:text-base md:h-full"
                            >
                                Search
                            </button>
                        </div>

                        {/* Sort — row 2 right on mobile, rightmost on desktop */}
                        <div ref={sortRef} className="flex-1 md:flex-initial order-3 relative">
                            <button
                                onClick={() => setOpenPanel(p => p === "sort" ? null : "sort")}
                                className="w-full md:h-[60px] flex items-center justify-center gap-2 px-4 md:px-8 py-[16px] md:py-0 bg-[#F4F4F5] hover:bg-[#E4E4E5] transition-colors rounded-xl font-medium text-[#52525B]"
                            >
                                <Icon icon="lucide:list-filter" width="18" height="18" />
                                <span className="whitespace-nowrap">{activeSortLabel}</span>
                            </button>
                            {openPanel === "sort" && sortDropdown}
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