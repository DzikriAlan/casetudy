"use client"

export function SocmedSection() {
  return (
    <footer className="relative bg-[#FE4F18] overflow-hidden mx-6 my-3 rounded-2xl px-6 py-12 md:mx-8 md:py-16 lg:mx-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-[70%]">
                <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                    <div className="bg-[#FE4F18] rounded-tl"></div>
                    <div className="bg-[#FE4F18] rounded-tr"></div>
                    <div className="bg-[#FE4F18] rounded-bl"></div>
                    <div className="bg-[#FE4F18] rounded-br"></div>
                    </div>
                </div>
                <span className="text-white text-3xl font-light">Casetudy</span>
                </div>
                
                <p className="text-white text-base mb-8 max-w-md">
                Casetudy is a learning platform for UX/UI & Product Design through real-world case studies.
                </p>
                
                <p className="text-white text-sm opacity-90">
                © 2025 Casetudy. All rights reserved.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-12 lg:flex-1 lg:pl-12 relative">
            <svg
                className="absolute left-0 top-0 h-full w-px hidden lg:block"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                <linearGradient id="borderGradientLeft" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="20%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="40%" stopColor="white" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="white" stopOpacity="0.5" />
                    <stop offset="80%" stopColor="white" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                </defs>
                <rect width="1" height="100%" fill="url(#borderGradientLeft)" />
            </svg>

            <nav className="flex flex-col h-full items-start justify-between gap-8">
                <button className="text-white text-lg hover:opacity-80 transition-opacity text-left">Case Studies</button>
                <button className="text-white text-lg hover:opacity-80 transition-opacity text-left">Why us</button>
                <button className="text-white text-lg hover:opacity-80 transition-opacity text-left">About Casetudy</button>
                <button className="text-white text-lg hover:opacity-80 transition-opacity text-left">Upload Case Study</button>
            </nav>

            <div className="relative flex flex-row lg:flex-col items-center gap-4 lg:pl-8">
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

                <div className="flex flex-col items-center gap-6">
                <button className="w-10 h-10 rounded-full border border-white/70 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 11 10" fill="none">
                        <path d="M8.60551 8.52067H7.10904V6.20021C7.10904 5.64687 7.09907 4.93456 6.33072 4.93456C5.55131 4.93456 5.43205 5.53744 5.43205 6.15993V8.52052H3.93557V3.74871H5.37219V4.40082H5.3923C5.53607 4.15742 5.74383 3.95719 5.99344 3.82145C6.24305 3.68572 6.52517 3.61955 6.80975 3.63001C8.32649 3.63001 8.60614 4.61784 8.60614 5.90294L8.60551 8.52067ZM2.24705 3.09643C2.07529 3.09646 1.90738 3.04606 1.76455 2.9516C1.62172 2.85715 1.5104 2.72287 1.44464 2.56576C1.37888 2.40865 1.36165 2.23577 1.39513 2.06896C1.4286 1.90216 1.51129 1.74893 1.63272 1.62865C1.75415 1.50837 1.90887 1.42645 2.07732 1.39324C2.24578 1.36003 2.42039 1.37703 2.57908 1.44209C2.73778 1.50714 2.87343 1.61733 2.96887 1.75871C3.06432 1.9001 3.11529 2.06634 3.11532 2.23641C3.11534 2.34933 3.09289 2.46115 3.04927 2.56548C3.00565 2.66981 2.9417 2.76461 2.86108 2.84447C2.78045 2.92433 2.68472 2.98769 2.57937 3.03092C2.47401 3.07415 2.36109 3.09641 2.24705 3.09643ZM2.99529 8.52067H1.49725V3.74871H2.99529V8.52067ZM9.35157 0.000681316H0.745278C0.549939 -0.00150137 0.361707 0.0731931 0.22196 0.208351C0.0822133 0.343509 0.002384 0.528072 0 0.721485V9.27837C0.00230241 9.47188 0.0820849 9.65656 0.221827 9.79186C0.361569 9.92716 0.549842 10.002 0.745278 9.99994H9.35157C9.5474 10.0024 9.73619 9.92775 9.87649 9.79245C10.0168 9.65716 10.0971 9.47226 10.0998 9.27837V0.720868C10.097 0.527071 10.0166 0.342298 9.87634 0.207143C9.73605 0.0719888 9.5473 -0.00249226 9.35157 6.36757e-05" fill="white"/>
                    </svg>
                </button>

                <button className="w-10 h-10 rounded-full border border-white/70 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 10" fill="none">
                    <g clip-path="url(#clip0_3_642)">
                        <path d="M8.71136 0.00195312H10.4002L6.71136 4.2464L11.0669 10.002H7.64469L4.97802 6.51306L1.91136 10.002H0.222466L4.17802 5.46862L0.000244141 0.00195312H3.51136L5.93358 3.20195L8.71136 0.00195312ZM8.11136 8.97973H9.04469L3.00024 0.957509H1.97802L8.11136 8.97973Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_3_642">
                        <rect width="11.0667" height="10" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                </button>

                <button className="w-10 h-10 rounded-full border border-white/70 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 10 10" fill="none">
                    <g clip-path="url(#clip0_3_646)">
                        <path d="M2.9297 0.0354571C2.3977 0.0605571 2.0344 0.145457 1.7168 0.270257C1.3881 0.398357 1.1095 0.570257 0.832296 0.848457C0.555096 1.12666 0.384396 1.40546 0.257196 1.73466C0.134096 2.05296 0.0506964 2.41656 0.0271964 2.94886C0.00369639 3.48116 -0.00150361 3.65226 0.00109639 5.01006C0.00369639 6.36786 0.00969639 6.53806 0.0354964 7.07146C0.0608964 7.60336 0.145496 7.96656 0.270296 8.28426C0.398596 8.61296 0.570296 8.89146 0.848596 9.16876C1.1269 9.44606 1.4055 9.61636 1.7355 9.74376C2.0535 9.86666 2.4172 9.95046 2.9494 9.97376C3.4816 9.99706 3.6529 10.0025 5.0103 9.99986C6.3677 9.99726 6.5386 9.99126 7.0719 9.96596C7.6052 9.94066 7.9665 9.85546 8.2843 9.73126C8.613 9.60266 8.8917 9.43126 9.1688 9.15286C9.4459 8.87446 9.6165 8.59546 9.7436 8.26606C9.8668 7.94806 9.9505 7.58436 9.9736 7.05256C9.9969 6.51886 10.0024 6.34846 9.9998 4.99086C9.9972 3.63326 9.9911 3.46306 9.9658 2.92986C9.9405 2.39666 9.8558 2.03456 9.7311 1.71666C9.6026 1.38796 9.4311 1.10966 9.1529 0.832157C8.8747 0.554657 8.5955 0.384157 8.2662 0.257357C7.948 0.134257 7.5845 0.0503571 7.0523 0.0273571C6.5201 0.00435709 6.3488 -0.00154291 4.9909 0.00105709C3.633 0.00365709 3.463 0.00945709 2.9297 0.0354571ZM2.9881 9.07426C2.5006 9.05306 2.2359 8.97206 2.0595 8.90426C1.8259 8.81426 1.6595 8.70546 1.4837 8.53136C1.3079 8.35726 1.1999 8.19026 1.1087 7.95716C1.0402 7.78076 0.957696 7.51636 0.934896 7.02886C0.910096 6.50196 0.904896 6.34376 0.901996 5.00886C0.899096 3.67396 0.904196 3.51596 0.927296 2.98886C0.948096 2.50176 1.0296 2.23676 1.0973 2.06046C1.1873 1.82656 1.2957 1.66046 1.4702 1.48476C1.6447 1.30906 1.8112 1.20086 2.0445 1.10966C2.2207 1.04086 2.4851 0.959057 2.9724 0.935857C3.4997 0.910857 3.6577 0.905857 4.9924 0.902957C6.3271 0.900057 6.4855 0.905057 7.013 0.928257C7.5001 0.949457 7.7652 1.03016 7.9413 1.09826C8.175 1.18826 8.3413 1.29636 8.517 1.47116C8.6927 1.64596 8.801 1.81186 8.8922 2.04566C8.9611 2.22136 9.0429 2.48566 9.0659 2.97326C9.091 3.50056 9.0967 3.65866 9.0991 4.99326C9.1015 6.32786 9.0968 6.48636 9.0737 7.01326C9.0524 7.50076 8.9716 7.76556 8.9037 7.94216C8.8137 8.17566 8.7052 8.34216 8.5306 8.51776C8.356 8.69336 8.1897 8.80156 7.9563 8.89276C7.7803 8.96146 7.5156 9.04346 7.0287 9.06666C6.5014 9.09146 6.3434 9.09666 5.0082 9.09956C3.673 9.10246 3.5155 9.09706 2.9882 9.07426M7.0642 2.32816C7.06439 2.44683 7.09978 2.56279 7.16588 2.66135C7.23199 2.75991 7.32583 2.83666 7.43556 2.88189C7.54528 2.92711 7.66595 2.93878 7.7823 2.91542C7.89866 2.89206 8.00547 2.83471 8.08924 2.75064C8.173 2.66657 8.22995 2.55955 8.25288 2.44311C8.27582 2.32667 8.26371 2.20604 8.21808 2.09648C8.17246 1.98693 8.09537 1.89336 7.99656 1.82762C7.89776 1.76188 7.78167 1.72692 7.663 1.72716C7.5039 1.72748 7.35145 1.79097 7.23915 1.90367C7.12686 2.01637 7.06393 2.16906 7.0642 2.32816ZM2.4332 5.00546C2.436 6.42346 3.5876 7.57036 5.0053 7.56766C6.423 7.56496 7.5707 6.41346 7.568 4.99546C7.5653 3.57746 6.4134 2.43026 4.9955 2.43306C3.5776 2.43586 2.4305 3.58766 2.4332 5.00546ZM3.3338 5.00366C3.33314 4.67402 3.43026 4.35158 3.61285 4.07714C3.79545 3.80269 4.05533 3.58855 4.35963 3.4618C4.66393 3.33504 4.99898 3.30138 5.32241 3.36505C5.64585 3.42872 5.94314 3.58686 6.17669 3.81949C6.41024 4.05212 6.56957 4.34879 6.63452 4.67197C6.69947 4.99515 6.66713 5.33033 6.54158 5.63513C6.41604 5.93993 6.20293 6.20065 5.92921 6.38433C5.65548 6.56802 5.33344 6.6664 5.0038 6.66706C4.78491 6.66752 4.56809 6.62485 4.3657 6.5415C4.1633 6.45816 3.97931 6.33575 3.82424 6.18129C3.66916 6.02682 3.54603 5.84332 3.46187 5.64126C3.37772 5.4392 3.3342 5.22254 3.3338 5.00366Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_3_646">
                        <rect width="10" height="10" fill="white"/>
                        </clipPath>
                    </defs>
                    </svg>
                </button>

                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none">
                <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="1"
                />
                <path
                    d="M15.3809 7C16.2748 7 17 7.72518 17 8.61914V15.3809C17 16.2748 16.2748 17 15.3809 17H8.61914C7.72518 17 7 16.2748 7 15.3809V8.61914C7 7.72518 7.72518 7 8.61914 7H15.3809ZM12.0078 8.31055C10.3683 8.31055 8.7666 9.24885 8.7666 11.9971C8.76661 14.761 10.4206 15.6895 12.0127 15.6895C13.8667 15.6893 14.8906 14.6009 14.8906 13.3486C14.8905 12.7597 14.6102 12.246 14.1006 11.9023C13.9741 11.8171 13.8344 11.7419 13.6836 11.6787C13.6482 11.1553 13.4927 10.7463 13.2207 10.46C12.9487 10.1737 12.5678 10.0225 12.1191 10.0225C11.4849 10.0225 11.0256 10.2162 10.6777 10.7148C10.6777 10.7148 11.0907 11.0024 11.2148 11.085C11.3992 10.8718 11.545 10.6845 12.1191 10.6846C12.7456 10.6846 12.9941 11.1876 12.9941 11.4814C12.8246 11.4469 12.4984 11.4287 12.2285 11.4287C11.5078 11.4288 10.5957 11.7782 10.5957 12.7422C10.5959 13.4172 11.2373 13.9325 11.9814 13.9326C13.259 13.9326 13.5506 12.9752 13.6592 12.4062C13.6911 12.4084 14.243 12.726 14.2432 13.3867C14.2432 14.361 13.2905 15.0273 12.0127 15.0273C10.4594 15.0273 9.42188 14.0118 9.42188 12.1016C9.42199 9.97141 10.3505 8.96973 11.9912 8.96973C12.9837 8.96981 14.0658 9.22146 14.582 10.7959L15.209 10.6328C14.5412 8.42261 12.7649 8.31055 12.0078 8.31055ZM12.3174 12.0869C12.6045 12.0869 12.7819 12.1077 13.0195 12.1611C12.9437 13.1485 12.4616 13.2793 11.9922 13.2793C11.736 13.2791 11.2568 13.1448 11.2568 12.7402C11.2569 12.4882 11.3787 12.0869 12.3174 12.0869Z"
                    fill="white"
                />
                </svg>

                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}