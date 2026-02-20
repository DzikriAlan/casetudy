# Casetudy

Sebuah platform yang mengkurasi dan mempublikasikan case study berkualitas tinggi di bidang Product & Design, agar siapa pun dapat belajar dari pengalaman nyata dengan lebih mudah, cepat, dan relevan.

# ❗ Requirements
- **Node.js** >= 20.19.5
- **npm** >= 10.x
- **MySQL Database**

## 〽️ Setup Project
```bash
npm install

cp .env.example .env.local

npx prisma db push
npx prisma generate

npm run dev
```

## 🚀 Teknologi yang Digunakan

- **Node.js**: v20.19.5  
- **Next.js**: v14 (App Router)  
- **React**: v18  
- **TypeScript**: v5+  
- **Tailwind CSS**: v3+  
- **PostCSS**: v8+  
- **Prisma ORM**: v5+  
- **Database**: MySQL  
- **Deployment**: Vercel

## 📁 Struktur Proyek

```.
├── .next/
├── .qodo/
├── node_modules/
├── prisma/
├── public/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── shared/
│   │   ├── components/
│   │   ├── fonts/
│   │   ├── lib/
│   │   └── locales/
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

# ❓ Other Info
- **Figma Landing** https://www.figma.com/design/7QDCUzoRKWAHxhAcKsRM3y/Casetudy?node-id=425-18&p=f&t=CHy3eEzhSm3QmwaO-0