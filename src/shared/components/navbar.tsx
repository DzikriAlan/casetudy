"use client"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="px-4 pt-4">
      <nav className="bg-white rounded-xl shadow-xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-900">Casetudy</span>
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="#case-studies" 
                className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
              >
                Case Studies
              </a>
              
              <a 
                href="#why" 
                className="text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium"
              >
                Why Us
              </a>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors text-sm font-medium">
                  <Image 
                    src="https://flagcdn.com/w40/gb.png" 
                    alt="EN" 
                    className="w-5 h-3.5 rounded shadow-sm"
                    width={20}
                    height={14}
                    unoptimized
                  />
                  <span>EN</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                Upload
              </button>
            </div>
            <button
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 pt-2 border-t border-gray-100">
              <div className="space-y-1 py-2">
                <a 
                  href="#case-studies" 
                  className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </a>
                <a 
                  href="#why" 
                  className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Why
                </a>
                <div className="border-t border-gray-100 my-2"></div>
                <button className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors">
                  <div className="flex items-center space-x-2">
                    <Image 
                      src="https://flagcdn.com/w40/gb.png" 
                      alt="EN" 
                      className="w-5 h-3.5 rounded shadow-sm"
                      width={20}
                      height={14}
                      unoptimized
                    />
                    <span>EN</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <button 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all shadow-md mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Upload
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}