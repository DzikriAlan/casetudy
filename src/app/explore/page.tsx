"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Navbar } from "@/shared/components/navbar-section";
import { FooterSection } from "@/shared/components/footer-section";
import { ListPorto } from "@/shared/components/reusable/list-porto";
import { useCaseStudiesHooks } from "@/features/case-studies/hooks/caseStudiesHooks";

const SIDEBAR_CATEGORIES = [
    "Project Management",
    "UI/UX Designer",
    "Software Engineer",
];

const SORT_OPTIONS = [
    { label: "Terbaru", value: "newest" },
    { label: "Terlama", value: "oldest" },
];

export default function ExplorePage() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [searchInput, setSearchInput] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSort, setSelectedSort] = useState<"newest" | "oldest">("newest");
    const [sortOpen, setSortOpen] = useState(false);
    const sortDesktopRef = useRef<HTMLDivElement>(null);
    const sortMobileRef = useRef<HTMLDivElement>(null);

    const { caseStudies, setPayloadCaseStudies } = useCaseStudiesHooks();

    const activeSortLabel = SORT_OPTIONS.find(o => o.value === selectedSort)?.label ?? "Terbaru";

    useEffect(() => {
        if (!sortOpen) return;
        const handler = (e: MouseEvent) => {
            const target = e.target as Node;
            const inDesktop = sortDesktopRef.current?.contains(target);
            const inMobile = sortMobileRef.current?.contains(target);
            if (!inDesktop && !inMobile) setSortOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [sortOpen]);

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

    const handleSelectCategory = (category: string | null) => {
        setSelectedCategory(category);
        setPayloadCaseStudies(prev => ({ ...prev, page: 1, category: category ?? undefined }));
    };

    const handleSelectSort = (sort: "newest" | "oldest") => {
        setSelectedSort(sort);
        setPayloadCaseStudies(prev => ({ ...prev, page: 1, sort }));
        setSortOpen(false);
    };

    const headerTitle = selectedCategory
        ? `Browse in ${selectedCategory}`
        : "Browse in All Case Studies";

    const sortDropdown = (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg border border-[#E6E6E6] z-50 py-1">
            {SORT_OPTIONS.map(opt => (
                <button
                    key={opt.value}
                    onClick={() => handleSelectSort(opt.value as "newest" | "oldest")}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-[#F4F4F5] transition-colors flex items-center justify-between ${selectedSort === opt.value ? "text-[#FE4F18] font-semibold" : "text-[#1A1A1A]"}`}
                >
                    {opt.label}
                    {selectedSort === opt.value && <Icon icon="lucide:check" width="14" height="14" />}
                </button>
            ))}
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            <div className={`fixed px-3 py-4 z-40 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <Navbar />
            </div>

            <div className="flex pt-24 md:pt-32 min-h-screen">
                {/* Sidebar — desktop only */}
                <aside className="hidden md:flex flex-col w-60 lg:w-72 border-r border-[#E6E6E6] shrink-0 px-4 pt-10 gap-1">
                    <button
                        onClick={() => handleSelectCategory(null)}
                        className={`flex items-center w-full px-4 py-3 rounded-xl text-left font-medium transition-colors ${selectedCategory === null ? "bg-[#FE4F18] text-white" : "text-[#1A1A1A] hover:bg-[#F4F4F5]"}`}
                    >
                        All Case Studies
                    </button>
                    {SIDEBAR_CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleSelectCategory(cat)}
                            className={`flex items-center w-full px-4 py-3 rounded-xl text-left font-medium transition-colors ${selectedCategory === cat ? "bg-[#FE4F18] text-white" : "text-[#1A1A1A] hover:bg-[#F4F4F5]"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                    <div className="px-4 md:px-10 pt-8 pb-2">
                        <h1 className="text-[28px] md:text-[36px] font-bold text-[#1A1A1A] mb-6">
                            {headerTitle}
                        </h1>

                        {/* Search Bar + Sort (desktop) */}
                        <div className="flex gap-3">
                            <div className="flex flex-1 bg-white border border-[#E6E6E6] rounded-xl p-[6px] shadow-sm focus-within:border-[#FE4F18] transition-colors">
                                <input
                                    type="text"
                                    placeholder="Search by case study name"
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                    onKeyDown={e => e.key === "Enter" && handleSearch()}
                                    className="w-full px-4 py-2 outline-none text-[#1A1A1A] placeholder:text-[#999999] bg-transparent"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="bg-[#FE4F18] hover:bg-[#E54515] transition-colors text-white px-6 py-3 font-semibold rounded-lg text-sm md:text-base"
                                >
                                    Search
                                </button>
                            </div>

                            {/* Sort dropdown — desktop only */}
                            <div ref={sortDesktopRef} className="hidden md:block relative shrink-0">
                                <button
                                    onClick={() => setSortOpen(p => !p)}
                                    className="h-full flex items-center gap-2 px-5 py-3 bg-[#F4F4F5] hover:bg-[#E4E4E5] transition-colors rounded-xl font-medium text-[#52525B] whitespace-nowrap"
                                >
                                    <Icon icon="lucide:list-filter" width="18" height="18" />
                                    {activeSortLabel}
                                </button>
                                {sortOpen && sortDropdown}
                            </div>
                        </div>

                        {/* Mobile category pills — horizontal scroll */}
                        <div className="flex md:hidden gap-2 overflow-x-auto mt-4 pb-1 no-scrollbar">
                            <button
                                onClick={() => handleSelectCategory(null)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${selectedCategory === null ? "bg-[#FE4F18] text-white" : "bg-[#F4F4F5] text-[#52525B]"}`}
                            >
                                All
                            </button>
                            {SIDEBAR_CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => handleSelectCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${selectedCategory === cat ? "bg-[#FE4F18] text-white" : "bg-[#F4F4F5] text-[#52525B]"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Mobile sort — below categories */}
                        <div ref={sortMobileRef} className="md:hidden relative mt-3 w-fit">
                            <button
                                onClick={() => setSortOpen(p => !p)}
                                className="flex items-center gap-2 px-4 py-2 bg-[#F4F4F5] hover:bg-[#E4E4E5] transition-colors rounded-xl font-medium text-[#52525B] text-sm"
                            >
                                <Icon icon="lucide:list-filter" width="16" height="16" />
                                {activeSortLabel}
                            </button>
                            {sortOpen && sortDropdown}
                        </div>
                    </div>

                    <ListPorto
                        hideExploreSection={true}
                        showEndOfList={true}
                        showViewAllButton={false}
                        imageContain={true}
                        data={caseStudies.data}
                        isLoading={caseStudies.isLoading}
                        isError={caseStudies.isError}
                    />
                </main>
            </div>

            <FooterSection />
        </div>
    );
}
