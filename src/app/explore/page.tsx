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

    // Close dropdowns on outside click — only when open
    useEffect(() => {
        if (openPanel !== "filter") return;
        const handler = (e: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
                setOpenPanel(null);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [openPanel]);

    useEffect(() => {
        if (openPanel !== "sort") return;
        const handler = (e: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
                setOpenPanel(null);
            }
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
            <div
                className={`fixed px-3 py-4 z-40 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
            >
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

                    <div className="w-full flex flex-col gap-3 mb-4">
                        {/* Mobile: Search */}
                        <div className="flex md:hidden bg-white border border-[#E6E6E6] rounded-xl p-[6px] shadow-sm">
                            <input
                                type="text"
                                placeholder="Search case studies"
                                value={searchInput}
                                onChange={e => setSearchInput(e.target.value)}
                                onKeyDown={e => e.key === "Enter" && handleSearch()}
                                className="w-full px-4 outline-none text-[#1A1A1A] placeholder:text-[#999999] bg-transparent"
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-[#FE4F18] text-white px-6 py-[14px] font-semibold rounded-lg text-sm"
                            >
                                Search
                            </button>
                        </div>

                        {/* Mobile: Filter + Sort */}
                        <div className="flex w-full gap-3 md:hidden">
                            {/* Filter */}
                            <div ref={filterRef} className="flex-1 relative">
                                <button
                                    onClick={() => setOpenPanel(p => p === "filter" ? null : "filter")}
                                    className={`w-full flex items-center justify-center gap-2 py-[16px] rounded-xl font-medium transition-colors ${activeCategories.length > 0 ? "bg-[#FE4F18] text-white" : "bg-[#F4F4F5] text-[#52525B]"}`}
                                >
                                    <Icon icon="octicon:sliders-16" width="18" height="18" />
                                    {filterLabel}
                                </button>
                                {openPanel === "filter" && categoryDropdown}
                            </div>

                            {/* Sort */}
                            <div ref={sortRef} className="flex-1 relative">
                                <button
                                    onClick={() => setOpenPanel(p => p === "sort" ? null : "sort")}
                                    className="w-full flex items-center justify-center gap-2 py-[16px] bg-[#F4F4F5] rounded-xl font-medium text-[#52525B]"
                                >
                                    <Icon icon="lucide:list-filter" width="18" height="18" />
                                    {activeSortLabel}
                                </button>
                                {openPanel === "sort" && sortDropdown}
                            </div>
                        </div>

                        {/* Desktop */}
                        <div className="hidden md:flex w-full gap-4 items-center h-[60px]">
                            {/* Filter */}
                            <div ref={filterRef} className="relative h-full">
                                <button
                                    onClick={() => setOpenPanel(p => p === "filter" ? null : "filter")}
                                    className={`h-full flex items-center justify-center gap-2 px-8 rounded-xl font-medium transition-colors ${activeCategories.length > 0 ? "bg-[#FE4F18] text-white" : "bg-[#F4F4F5] hover:bg-[#E4E4E5] text-[#52525B]"}`}
                                >
                                    <Icon icon="octicon:sliders-16" width="18" height="18" />
                                    {filterLabel}
                                </button>
                                {openPanel === "filter" && categoryDropdown}
                            </div>

                            {/* Search */}
                            <div className="flex-1 h-full flex bg-white border border-[#E6E6E6] rounded-xl p-[6px] focus-within:border-[#FE4F18] transition-colors">
                                <input
                                    type="text"
                                    placeholder="Search case studies"
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                    onKeyDown={e => e.key === "Enter" && handleSearch()}
                                    className="w-full px-5 py-2 outline-none text-[#1A1A1A] placeholder:text-[#999999] rounded-l-xl bg-transparent"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="bg-[#FE4F18] hover:bg-[#E54515] transition-colors text-white px-10 h-full font-semibold rounded-lg"
                                >
                                    Search
                                </button>
                            </div>

                            {/* Sort */}
                            <div ref={sortRef} className="relative h-full">
                                <button
                                    onClick={() => setOpenPanel(p => p === "sort" ? null : "sort")}
                                    className="h-full flex items-center justify-center gap-2 px-8 bg-[#F4F4F5] hover:bg-[#E4E4E5] transition-colors rounded-xl font-medium text-[#52525B]"
                                >
                                    <Icon icon="lucide:list-filter" width="18" height="18" />
                                    {activeSortLabel}
                                </button>
                                {openPanel === "sort" && sortDropdown}
                            </div>
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
