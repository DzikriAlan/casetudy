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

export function ListPorto() {
  const portfolios = [
    {
      title: "Improving Checkout Flow Mobile App",
      description: "Improving completion rate through clearer flow and hierarchy.",
      tags: ["Onboarding", "User Research"],
      author: "John Dukes",
      role: "Product Designer",
      level: { name: 'Intermediate', icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
      image: oneImg,
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
    },
    {
      title: "Redesigning Checkout Experience for E-commerce",
      description: "Simplifying complex steps to increase conversion rate.",
      tags: ["UX Flow", "Usability Testing"],
      author: "Eddie Lake",
      role: "UX Designer",
      level: { name: 'Intermediate', icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
      image: twoImg,
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop"
    },
    {
      title: "Building a Consistent UI for SaaS Dashboard",
      description: "Aligning components to reduce design inconsistency.",
      tags: ["Design System", "UI Design"],
      author: "Stephanie Sharkey",
      role: "UI Designer",
      level: { name: 'Beginner', icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
      image: threeImg,
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
    },
    {
      title: "Optimizing First-Time User Experience in Fintech App",
      description: "Helping new users understand key features faster.",
      tags: ["First-Time UX", "Interaction Design"],
      author: "Jerry Helfer",
      role: "UX/UI Designer",
      level: { name: 'Advanced', icon: 'bg-[#22BE7B]', background: 'bg-[#DFF4E5]', color: 'text-[#1B734C]' },
      image: fourImg,
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
    },
    {
      title: "Auditing User Flow for Clarity",
      description: "Identifying key friction points in user flows and improving them step by step.",
      tags: ["User Flow", "UX Analysis"],
      author: "Rina Mahesa",
      role: "Product Designer",
      level: { name: 'Beginner', icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
      image: fiveImg,
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop"
    },
    {
      title: "Simplifying Onboarding for New Users",
      description: "Simplifying onboarding so users understand what to do from the first interaction.",
      tags: ["Onboarding", "UX Writing"],
      author: "Dimas Putra",
      role: "UX Writing",
      level: { name: 'Intermediate', icon: 'bg-[#FE4F18]', background: 'bg-[#FFDCD1]', color: 'text-[#CF4418]' },
      image: sixImg,
      authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop"
    },
    {
      title: "Making Design Decisions with Research",
      description: "Making design decisions based on user insights and validated data.",
      tags: ["UX Strategy", "Research"],
      author: "Sarah Wulandari",
      role: "UX Researcher",
      level: { name: 'Beginner', icon: 'bg-[#F9BF25]', background: 'bg-[#FFF3CC]', color: 'text-[#916800]' },
      image: sevenImg,
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop"
    },
    {
      title: "Improving Mobile Checkout User Experience",
      description: "Reducing drop-offs in mobile checkout through better UI hierarchy.",
      tags: ["Mobile UX", "UI Design"],
      author: "Fajar Nugroho",
      role: "UI Designer",
      level: { name: 'Advanced', icon: 'bg-[#22BE7B]', background: 'bg-[#DFF4E5]', color: 'text-[#1B734C]' },
      image: eightImg,
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop"
    }
  ]

  return (
    <div>
      <ExploreSection 
        badgeText="Start with Real Examples" 
        title="Featured Case Studies" 
        description="Explore selected case studies to see how real UX and product problems are approached, explored, and solved." 
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
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-start self-stretch p-[14px] bg-[#FBFBFD]">
              <h3 className="text-[#1A1A1A] text-lg font-bold leading-[28px] mb-3 line-clamp-2 min-h-[56px]">
                {item.title}
              </h3>
              <p className="text-[#6B6B6B] text-[14px] font-[400] leading-[20px]">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs md:text-sm">
                    {tag}
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
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
                <span
                  className={`text-xs p-2 rounded-full flex items-center gap-2 ${item?.level?.background} ${item?.level?.color}`}
                >
                  <span className={`flex items-center justify-center rounded-full h-[22px] w-[22px] ${item?.level?.icon}`}>
                    <Icon icon="rivet-icons:lightning" width="10" height="10" className='text-white' />
                  </span> 
                  {item?.level?.name}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}