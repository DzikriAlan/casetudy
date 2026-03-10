import { CaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

import oneImg from "@/shared/assets/img/landing/porto/one.webp";
import twoImg from "@/shared/assets/img/landing/porto/two.webp";
import threeImg from "@/shared/assets/img/landing/porto/three.webp";
import fourImg from "@/shared/assets/img/landing/porto/four.webp";
import fiveImg from "@/shared/assets/img/landing/porto/five.webp";
import sixImg from "@/shared/assets/img/landing/porto/six.webp";
import sevenImg from "@/shared/assets/img/landing/porto/seven.webp";
import eightImg from "@/shared/assets/img/landing/porto/eight.webp";

const uiFallbacks = [
    {
        tags: [{ en: "Onboarding", id: "Onboarding" }, { en: "User Research", id: "Riset Pengguna" }],
        author: "John Dukes",
        role: { en: "Product Designer", id: "Desainer Produk" },
        level: { name: { en: "Intermediate", id: "Menengah" }, icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
        image: oneImg,
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
    },
    {
        tags: [{ en: "UX Flow", id: "Alur UX" }, { en: "Usability Testing", id: "Pengujian Kegunaan" }],
        author: "Eddie Lake",
        role: { en: "UX Designer", id: "Desainer UX" },
        level: { name: { en: "Intermediate", id: "Menengah" }, icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
        image: twoImg,
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop"
    },
    {
        tags: [{ en: "Design System", id: "Sistem Desain" }, { en: "UI Design", id: "Desain UI" }],
        author: "Stephanie Sharkey",
        role: { en: "UI Designer", id: "Desainer UI" },
        level: { name: { en: "Beginner", id: "Pemula" }, icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
        image: threeImg,
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
    },
    {
        tags: [{ en: "First-Time UX", id: "UX Pengguna Pertama" }, { en: "Interaction Design", id: "Desain Interaksi" }],
        author: "Jerry Helfer",
        role: { en: "UX/UI Designer", id: "Desainer UX/UI" },
        level: { name: { en: "Advanced", id: "Lanjutan" }, icon: 'bg-[#22BE7B]', background: 'bg-[#DFF4E5]', color: 'text-[#1B734C]' },
        image: fourImg,
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
        tags: [{ en: "User Flow", id: "Alur Pengguna" }, { en: "UX Analysis", id: "Analisis UX" }],
        author: "Rina Mahesa",
        role: { en: "Product Designer", id: "Desainer Produk" },
        level: { name: { en: "Beginner", id: "Pemula" }, icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
        image: fiveImg,
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
    },
    {
        tags: [{ en: "Onboarding", id: "Onboarding" }, { en: "UX Writing", id: "Penulisan UX" }],
        author: "Dimas Putra",
        role: { en: "UX Writing", id: "Penulis UX" },
        level: { name: { en: "Intermediate", id: "Menengah" }, icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
        image: sixImg,
        authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop"
    },
    {
        tags: [{ en: "UX Strategy", id: "Strategi UX" }, { en: "Research", id: "Riset" }],
        author: "Sarah Wulandari",
        role: { en: "UX Researcher", id: "Peneliti UX" },
        level: { name: { en: "Beginner", id: "Pemula" }, icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
        image: sevenImg,
        authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop"
    },
    {
        tags: [{ en: "Mobile UX", id: "UX Mobile" }, { en: "UI Design", id: "Desain UI" }],
        author: "Fajar Nugroho",
        role: { en: "UI Designer", id: "Desainer UI" },
        level: { name: { en: "Advanced", id: "Lanjutan" }, icon: 'bg-[#22BE7B]', background: 'bg-[#DFF4E5]', color: 'text-[#1B734C]' },
        image: eightImg,
        authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop"
    }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setCaseStudiesMapper = (res: any, setCaseStudiesState: React.Dispatch<React.SetStateAction<CaseStudies>>) => {
    if (res?.data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedData = res.data.map((item: any, i: number) => ({
            id: item?.id || 0,
            documentId: item?.documentId || "",
            title: item?.title || "",
            description: item?.description || "",
            external_link: item?.external_link || "",
            approved: item?.approved || false,
            publishedAt: item?.publishedAt || "",
            ...uiFallbacks[i % uiFallbacks.length]
        }));

        setCaseStudiesState({
            isLoading: false,
            isError: false,
            data: formattedData,
            pagination: {
                page: res?.meta?.pagination?.page || 1,
                pageSize: res?.meta?.pagination?.pageSize || 10,
                pageCount: res?.meta?.pagination?.pageCount || 1,
                total: res?.meta?.pagination?.total || 1,
            }
        });
    } else if (res?.status === "error" || res) {
        setCaseStudiesState(prev => ({ ...prev, isError: true, isLoading: false }));
    }
};
