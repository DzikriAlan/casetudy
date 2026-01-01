"use client"

export function StartCaseSection() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl text-center">
    <button className="mb-8 rounded-[50px] border border-white/0 bg-gradient-to-b from-[#FFDCD1] to-white px-6 py-2 text-sm font-medium text-[#FE4F18] shadow-[0_2px_10px_0_rgba(255,255,255,0.30),inset_0_2px_3px_0_rgba(254,79,24,0.20)] transition-all hover:shadow-[0_4px_15px_0_rgba(255,255,255,0.40),inset_0_2px_3px_0_rgba(254,79,24,0.30)]">
        From Learning to Sharing
    </button>
    
    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
        Start Your Case Study
    </h2>
    
    <p className="mb-10 text-base text-white/90 md:text-lg lg:text-xl">
        Turn your work into a structured case study and document what you’ve learned along the way.
    </p>
    
    <div className="flex items-center justify-center">
        <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-semibold text-orange-500 transition-all hover:bg-orange-50 hover:shadow-lg md:text-lg">
        Upload Case Study
        </button>
    </div> 
    </div>
  )
}