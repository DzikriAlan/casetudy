"use client"

export function BorderLeft() {
  return (
    <svg
    className="absolute left-0 top-0 h-full w-px hidden lg:block"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <defs>
        <linearGradient id="borderGradientIcons" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="white" stopOpacity="0" />
        <stop offset="20%" stopColor="white" stopOpacity="0.3" />
        <stop offset="40%" stopColor="white" stopOpacity="0.5" />
        <stop offset="60%" stopColor="white" stopOpacity="0.5" />
        <stop offset="80%" stopColor="white" stopOpacity="0.3" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
    </defs>
    <rect width="1" height="100%" fill="url(#borderGradientIcons)" />
    </svg>
  )
}
