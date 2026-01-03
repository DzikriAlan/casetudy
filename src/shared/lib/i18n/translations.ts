// lib/i18n/translations.ts
export const translations = {
  en: {
    caseStudies: "Case Studies",
    whyUs: "Why Us",
    upload: "Upload",
    learnFromRealCaseStudies: "Learn from Real Case Studies",
    understandUXThrough: "Understand UX Through",
    realWorldPractice: "Real-World Practice",
    exploreCaseStudies: "Explore Case Studies",
    uploadCaseStudy: "Upload Case Study",
  },
  id: {
    caseStudies: "Studi Kasus",
    whyUs: "Mengapa Kami",
    upload: "Unggah",
    learnFromRealCaseStudies: "Belajar dari Studi Kasus Nyata",
    understandUXThrough: "Memahami UX Melalui",
    realWorldPractice: "Praktik Dunia Nyata",
    exploreCaseStudies: "Jelajahi Studi Kasus",
    uploadCaseStudy: "Unggah Studi Kasus",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;