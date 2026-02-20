"use client"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import logoCasetudy from "@/shared/assets/img/logo/logo-casetudy.webp"
import { useLanguage } from "@/shared/lib/i18n/LanguageContext"
import type { Language } from "@/shared/lib/i18n/translations"

const LANGUAGES = [
  { code: "en" as Language, name: "EN", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "id" as Language, name: "ID", flag: "https://flagcdn.com/w40/id.png" },
] as const

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const currentLang = LANGUAGES.find(l => l.code === language) || LANGUAGES[1]

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
    setIsMobileLangMenuOpen(false)
  }

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileLangMenuOpen(false)
  }

  const toggleLangMenu = () => {
    setIsLangMenuOpen(prev => !prev)
  }

  const toggleMobileLangMenu = () => {
    setIsMobileLangMenuOpen(prev => !prev)
  }

  const selectLanguage = (lang: typeof LANGUAGES[number]) => {
    setLanguage(lang.code)
    setIsLangMenuOpen(false)
    setIsMobileLangMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      
      if (langMenuRef.current && !langMenuRef.current.contains(target)) {
        setIsLangMenuOpen(false)
      }
      
      if (isMobileMenuOpen && navRef.current && mobileMenuRef.current) {
        if (!navRef.current.contains(target) && !mobileMenuRef.current.contains(target)) {
          closeMenu()
        }
      }
    }

    if (isMobileMenuOpen || isLangMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobileMenuOpen, isLangMenuOpen])

  return (
    <nav className="rounded-xl shadow-xl mx-4 relative" ref={navRef}>
      <div className="flex bg-white rounded-xl items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <Image 
              src={logoCasetudy} 
              alt="Case Study Logo"
            />
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a 
            href="#case-studies" 
            className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
          >
            {t("caseStudies")}
          </a>
          
          <a 
            href="#why" 
            className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
          >
            {t("whyUs")}
          </a>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={toggleLangMenu}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
              type="button"
            >
              <Image 
                src={currentLang.flag}
                alt={currentLang.name}
                className="w-5 h-3.5 rounded shadow-sm"
                width={20}
                height={14}
                unoptimized
              />
              <span>{currentLang.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang)}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    type="button"
                  >
                    <Image 
                      src={lang.flag}
                      alt={lang.name}
                      className="w-5 h-3.5 rounded shadow-sm"
                      width={20}
                      height={14}
                      unoptimized
                    />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            className="bg-[#FE4F18] text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            type="button"
          >
            {t("upload")}
          </button>
        </div>
        <button
          className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors z-50 relative"
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="mt-4 bg-white rounded-xl lg:hidden p-4 border-t border-gray-100 absolute left-0 right-0 z-40 shadow-xl">
          <div className="space-y-1 py-2">
            <a 
              href="#case-studies" 
              className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
              onClick={closeMenu}
            >
              {t("caseStudies")}
            </a>
            <a 
              href="#why" 
              className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
              onClick={closeMenu}
            >
              {t("whyUs")}
            </a>
            <div className="border-t border-gray-100 my-2"></div>
            <div className="flex flex-col gap-4">
              <div>
                <button 
                  type="button"
                  onClick={toggleMobileLangMenu}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Image 
                      src={currentLang.flag}
                      alt={currentLang.name}
                      className="w-5 h-3.5 rounded shadow-sm"
                      width={20}
                      height={14}
                      unoptimized
                    />
                    <span>{currentLang.name}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileLangMenuOpen && (
                  <div className="mt-1 bg-gray-50 rounded-lg py-1 mx-2">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang)}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors rounded"
                        type="button"
                      >
                        <Image 
                          src={lang.flag}
                          alt={lang.name}
                          className="w-5 h-3.5 rounded shadow-sm"
                          width={20}
                          height={14}
                          unoptimized
                        />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                type="button"
                className="w-full bg-[#FE4F18] hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all shadow-md"
                onClick={closeMenu}
              >
                {t("upload")}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}