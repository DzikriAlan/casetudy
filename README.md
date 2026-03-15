# Explore Case Study Frontend

Platform untuk menampilkan dan menjelajahi koleksi case studies, dibangun menggunakan Next.js, React, dan TypeScript dengan pola komposisi modern dan arsitektur komponen yang terstruktur.

## 🚀 Teknologi yang Digunakan

Proyek ini menggunakan teknologi-teknologi berikut:

- **Framework**: Next.js (React) + TypeScript - Kerangka kerja utama untuk pengembangan aplikasi
- **UI Framework**: Tailwind CSS + shadcn/ui - Komponen UI dan sistem desain
- **State Management**: Custom React Hooks - Pengelolaan state aplikasi terenkapsulasi
- **Build Tool**: Next.js Webpack/Turbopack - Alat pengembangan dan pembangunan aplikasi
- **Router**: Next.js App Router - Pengelolaan navigasi aplikasi
- **HTTP Client**: Axios - Penanganan permintaan HTTP
- **Icons**: Lucide React - Sistem pengelolaan ikon
- **Node Version**: v20.19^

## 📁 Struktur Proyek

```
src/
├── assets/              # Aset statis (gambar, font, ikon)
├── features/           
│   └── case-studies/    # Modul fitur case studies
│       ├── data/       # Konstanta dan data statis
│       ├── helpers/    # Fungsi-fungsi pembantu (mapper, formatter)
│       ├── hooks/      # Hooks (orchestration pemanggilan API dan state)
│       ├── service/    # Layanan API (Axios calls)
│       ├── states/     # Pengelolaan state (custom hooks merepresentasikan react state)
│       ├── store/      # Pengelolaan logika penggabungan hook dan service
│       └── types/      # Definisi tipe TypeScript
├── shared/
│   ├── components/
│   │   ├── base/       # Komponen dasar
│   │   ├── features/   # Komponen khusus fitur
│   │   └── reusable/   # Komponen yang dapat digunakan ulang
│   ├── hooks/          # Hooks yang dapat digunakan ulang
│   ├── lib/            # Library pihak ketiga seperti Axios / i18n
│   ├── stores/         # Penyimpanan state global
│   └── types/          # Tipe-tipe TypeScript
```

## 🛠️ Instalasi

```bash
# Mengklon repositori
git clone https://github.com/your-username/explore-case-study.git

# Memasang dependensi
npm install

# Membuat berkas .env
cp .env.example .env

# Menjalankan server pengembangan
npm run dev
```

## 🔧 Panduan Pengembangan

### Struktur Komponen
```tsx
import { useState, useEffect } from 'react'

interface Props {
  title: string;
}

export function ExampleComponent({ title }: Props) {
  // 1. State dan Logika
  const [data, setData] = useState([]);

  // 2. Metode-metode
  const handleAction = () => {
    // Implementasi
  }

  // 3. Tampilan
  return (
    <div>{title}</div>
  )
}
```

### Pengelolaan Data
Dibuat pada saat pembuatan halaman, karena ada kalanya fe perlu mendevelop
halaman tapi belum ada data real nya dari backend maka dari itu untuk data
dummy kamu buat disini:

```typescript
export const recentSearches = [
  'Peraturan WFH Terbaru',
];

export const suggestions = [
  'Peraturan Karyawan Terbaru',
  'Perubahan Peraturan dan Kebijakan Perusahaan',
  'Peraturan Karyawan Tetap 2025',
];
```

### Pengelolaan Types

Wajib melakukan penulisan types berdasarkan struktur data yang sudah di define
oleh backend (terkait payload / parameter) dan berdasarkan struktur data
yang sudah di define pada Pengelolaan Data diatas (sebelumnya)

gunakan prefix
- payload                  = `Payload${url api (ex: /case-studies)}`
- state data               = `${url api (ex: /case-studies)}`
- state data yg dikonsumsi = `Data${url api (ex: /case-studies)}`

```typescript
// payload
export interface PayloadCaseStudies {
  page: number;
  max: number;
  sort: string;
}

// state data yang dikonsumsi
export interface DataCaseStudies {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  username: string;
  job: string;
  rank: string;
}

// state data
export interface CaseStudies {
  isLoading: boolean;
  isError: boolean;
  data: DataCaseStudies[];
  pagination: CaseStudiesPagination;
}

export interface CaseStudiesPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
```

### Pengelolaan Helper
Dibuat saat logika pengelolaan data sudah cukup banyak dan kompleks
sehingga mengganggu keterbacaan kode di service, store, dan hooks maka
letakan logika tersebut di helper (helper ini khusus features yang 
sedang kamu kerjakan)

gunakan prefix
- formatting = `formatting${dataYangDiFormatDanHarusCamelCase}`

```typescript
// formatting
export const formattingDate = (date: string) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString("id-ID", { month: "short" });
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
};
```

### Pengelolaan Service
Service bersih dari logika apapun karena hanya untuk melakukan pemanggilan
api saja, untuk pengelolaan data akan di handle oleh file /*prefixStore.ts

gunakan prefix
- get    = `get${url api (ex: /case-studies)}`
- post   = `post${url api (ex: /case-studies)}`
- delete = `delete${url api (ex: /case-studies)}`
- put    = `put${url api (ex: /case-studies)}`

```typescript
import { api } from "@/shared/lib/api/axios";
import { PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";

let abortCaseStudies: AbortController | null = null;

export const abortGetCaseStudies = () => abortCaseStudies?.abort();

export const getCaseStudies = async (payload: PayloadCaseStudies) => {
  try {
    if (abortCaseStudies) abortCaseStudies.abort();
    abortCaseStudies = new AbortController();

    const { data } = await api.get("/case-studies", {
      params: {
        page: payload.page,
        pageSize: payload.max,
        sort: payload.sort,
      },
      signal: abortCaseStudies.signal,
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
```

### Pengelolaan Store
Memiliki 4 Komponen dalam store yaitu payload, state data, api call, pengelolaan (mapping) state agar bisa langsung dikonsumsi berdasarkan kontrak yang sudah dibuat pada saat pembuatan halaman (dummy data)

gunakan prefix untuk state
- payload = `Payload${url api (ex: /case-studies)}`
- url api = `${url api (ex: /case-studies)}`

gunakan prefix untuk api call
- fetch = `fetch${url api (ex: /case-studies)}`
- remove = `remove${url api (ex: /case-studies)}`
- update = `update${url api (ex: /case-studies)}`
- store = `store${url api (ex: /case-studies)}`

gunakan prefix untuk management state
- set = `set${url api (ex: /case-studies)}`

```typescript
import { useState } from "react";
import { CaseStudiesState, PayloadCaseStudies } from "@/features/case-studies/types/caseStudiesTypes";
import { getCaseStudies } from "@/features/case-studies/service/caseStudiesService";

export const useCaseStudiesStates = () => {
  const [payloadCaseStudies, setPayloadCaseStudies] = useState<PayloadCaseStudies>({
    page: 1,
    max: 10,
    sort: "title:asc",
  });

  const [caseStudies, setCaseStudies] = useState<CaseStudiesState>({
    data: [],
    isLoading: true,
    isError: false,
  });

  return { payloadCaseStudies, setPayloadCaseStudies, caseStudies, setCaseStudies };
}

export const useCaseStudiesStore = (setCaseStudies: React.Dispatch<React.SetStateAction<CaseStudiesState>>) => {
  const fetchCaseStudies = async (payload: PayloadCaseStudies) => {
    try {
      setCaseStudies(prev => ({ ...prev, isLoading: true, isError: false }));
      const { data } = await getCaseStudies(payload);

      if (data) {
        setCaseStudies({ data, isLoading: false, isError: false });
      } else {
        setCaseStudies(prev => ({ ...prev, isError: true, isLoading: false }));
      }

      return { data };
    } catch (error: any) {
      if (error.name !== "CanceledError") {
        setCaseStudies(prev => ({ ...prev, isLoading: false, isError: true }));
        console.error(error);
        return { error };
      }
      return { canceled: true };
    }
  };

  return {
    fetchCaseStudies
  }
};
```

### Pengelolaan Hooks
Hook dibuat ketika 1 aksi dalam aplikasi membutuhkan aksi aksi lain (ex: harus hit api a, hit api b baru setelah itu hit api target/utama-nya)

sebagai contoh ketika fetch case studies membutuhkan pengecekan filtering yang diperlukan maka dari itu hit 'fetchCaseStudies(payload)' berdasarkan parameter filter yang diberikan.

gunakan prefix
- handle = `handle${url api (ex: /case-studies)}`

```typescript
import { useEffect } from "react";
import { useCaseStudiesStore } from "@/features/case-studies/store/caseStudiesStore";
import { useCaseStudiesStates } from "@/features/case-studies/states/caseStudiesStates";
import { abortGetCaseStudies } from "@/features/case-studies/service/caseStudiesService";

export const useCaseStudiesHooks = () => {
  const { payloadCaseStudies, caseStudies, setCaseStudies } = useCaseStudiesStates();
  const { fetchCaseStudies } = useCaseStudiesStore(setCaseStudies);

  useEffect(() => {
    fetchCaseStudies(payloadCaseStudies);
    return () => abortGetCaseStudies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payloadCaseStudies.page, payloadCaseStudies.max, payloadCaseStudies.sort]);

  return { caseStudies };
};
```

## 🏗️ Arsitektur

### Fitur Utama
- Tampilan daftar case studies
- Penjelajahan case studies dengan berbagai filter
- Penampilan detail case studies
- Responsive design untuk semua ukuran layar

### Pola Utama (Lifecycle Development)
- Pembuatan halaman (inisiasi state dummy, di src/features/*/data/*Data.ts)
- Membuat types di src/features/*/types/*Types.ts
- Membuat service di src/features/*/service/*Service.ts
- Membuat hook states di src/features/*/states/*States.ts
- Membuat store di src/features/*/store/*Store.ts
- Membuat hooks di src/features/*/hooks/*Hooks.ts
- Membuat helper di src/features/*/helpers/*Helpers.ts
  (opsional, jika logika pengelolaan format atau utilitas cukup kompleks)

## 🚀 Pembangunan dan Penerapan

```bash
# Membangun untuk produksi
npm run build

# Pratinjau hasil pembangunan
npm run preview
```

## 🤝 Panduan Kontribusi

1. Fork repositori ini
2. Buat cabang fitur baru (`git checkout -b feature/fitur-baru`)
3. Lakukan commit perubahan (`git commit -m 'Menambahkan fitur baru'`)
4. Push ke cabang (`git push origin feature/fitur-baru`)
5. Buat Pull Request

## 📝 Environment Variables

### Development (HTTP Localhost)
```env
# API Configuration untuk development dengan localhost
NEXT_PUBLIC_API_BASE_URL=http://localhost:1337/api
NEXT_PUBLIC_BASE_URL=http://localhost:1337
NEXT_PUBLIC_API_TOKEN=your-api-token-here

# Next.js
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

### Production (HTTPS)
```env
# API Configuration untuk production
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com/api
NEXT_PUBLIC_BASE_URL=https://your-api-domain.com
NEXT_PUBLIC_API_TOKEN=your-api-token-here

# Next.js
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key-here
```

**Catatan:**
- Frontend otomatis mengizinkan HTTP untuk `localhost` dan `127.0.0.1` dalam mode development
- Untuk production, selalu gunakan HTTPS
- API token disimpan di variabel environment untuk keamanan

## 📚 Dokumentasi

Untuk dokumentasi lebih detail:
- [Pustaka Komponen](./docs/components.md)
- [Integrasi API](./docs/api.md)
- [Pengelolaan State](./docs/state.md)
- [Panduan Pengujian](./docs/testing.md)

## 📄 Lisensi

MIT License - lihat berkas [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

Dikembangkan oleh Casestudy Team.