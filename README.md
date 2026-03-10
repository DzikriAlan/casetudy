# Kazee AI Search Frontend

Antarmuka pencarian dan percakapan berbasis AI yang dibangun menggunakan Vue 3 dan TypeScript, menerapkan pola komposisi modern dan arsitektur komponen yang terstruktur.

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
git clone https://github.com/your-username/kazee-ai-search-frontend.git

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
- payload                  = `Payload${url api (ex: /v1/conversation/projects)}`
- state data               = `${url api (ex: /v1/conversation/projects)}`
- state data yg dikonsumsi = `Data${url api (ex: /v1/conversation/projects)}`

```typescript
// payload
export interface PayloadConversationProjects {
  page: number;
  limit: number;
  search: string;
  order_by: string;
  order_direction: string;
}

// state data yang dikonsumsi
export interface DataConversationProjects {
  id: number;
  name: string;
  date: string;
  conversationId?: string;
  files?: string;
}

// state data
export interface ConversationProjects {
  isLoading: boolean;
  isError: boolean;
  data: DataConversationProjects[] | { [key: string]: any }[];
  pagination: Pagination;
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
- get    = `get${url api (ex: /v1/conversation/projects)}`
- post   = `post${url api (ex: /v1/conversation/projects)}`
- delete = `delete${url api (ex: /v1/conversation/projects)}`
- put    = `put${url api (ex: /v1/conversation/projects)}`

```typescript
import apiClient from "@/shared/lib/api/axios";

let abortConversationProject: AbortController | null = null;

export const getConversationProject = async (conversationId: string) => {
  try {
    if (abortConversationProject) abortConversationProject.abort();
    abortConversationProject = new AbortController();

    const { data } = await apiClient.get(
      `/v1/ai-search/conversation/project/${conversationId}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
```

### Pengelolaan Store
Memiliki 4 Komponen dalam store yaitu payload, state data, api call, pengelolaan (mapping) state agar bisa langsung dikonsumsi berdasarkan kontrak yang sudah dibuat pada saat pembuatan halaman (dummy data)

gunakan prefix untuk state
- payload = `Payload${url api (ex: /v1/conversation/projects)}`
- url api = `${url api (ex: /v1/conversation/projects)}`

gunakan prefix untuk api call
- fetch = `fetch${url api (ex: /v1/conversation/projects)}`
- remove = `remove${url api (ex: /v1/conversation/projects)}`
- update = `update${url api (ex: /v1/conversation/projects)}`
- store = `store${url api (ex: /v1/conversation/projects)}`

gunakan prefix untuk management state
- set = `set${url api (ex: /v1/conversation/projects)}`

```typescript
import { useState } from "react";

export const useConversationStates = () => {
  const [payloadConversationProjects, setPayloadConversationProjects] = useState<PayloadConversationProjects>({
    page: 1,
    limit: 12,
    search: "",
    order_by: "created_at",
    order_direction: "desc",
  });
  
  const [conversationProjects, setConversationProjectsState] = useState<ConversationProjects>({
    isLoading: false,
    isError: false,
    data: [],
    pagination: {
      totalItems: 1,
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 12,
    },
  });

  return { payloadConversationProjects, setPayloadConversationProjects, conversationProjects, setConversationProjectsState };
}

export const useConversationStore = () => {
  const { payloadConversationProjects, conversationProjects, setConversationProjectsState } = useConversationStates();

  const setConversationProjects = (res: ResponseData) => {
    // Implementasi pemetaan state berdasarkan response API
  };

  const fetchConversationProjects = async (
    id: string,
    payload: PayloadConversationProjects,
    isStore: boolean = true
  ) => {
    try {
      if (isStore) setConversationProjectsState(prev => ({ ...prev, isLoading: true }));
      const data = await getConversationProjects(id, payload);
      if (isStore) setConversationProjects(data);
      return { data };
    } catch (error) {
      console.error(error);
    }
  };
  
  return {
    payloadConversationProjects, conversationProjects,
    fetchConversationProjects, setConversationProjects
  }
};
```

### Pengelolaan Hooks
Hook dibuat ketika 1 aksi dalam aplikasi membutuhkan aksi aksi lain (ex: harus hit api a, hit api b baru setelah itu hit api target/utama-nya)

sebagai contoh ketika generate conversation membutuhkan pengecekan apakah 
project dengan id tertentu sudah ada atau belum, maka dari itu hit 'fetchConversationProject(id)' terlebih dahulu sebelum melakukan generate conversation 'fetchConversationGenerate(id, payloadConversationGenerate)

gunakan prefix
- handle = `handle${url api (ex: /v1/conversation/projects)}`

```typescript
export function useConversationHooks() {
  const handleConversationGenerate = async (id: string) => {
    let storeFromGetProject = false;
    await fetchConversationProject(id).then((res: any) => {
      if (res?.data?.status === "success" && res?.data?.data !== null)
        storeFromGetProject = true;
    });

    if (!storeFromGetProject) {
      await fetchConversationGenerate(id, payloadConversationGenerate);
    }

    await fetchConversationRelevantFile(id, payloadConversationRelevantFile);
  };

  return {
    handleConversationGenerate
  }
}
```

## 🏗️ Arsitektur

### Fitur Utama
- Percakapan real-time dengan AI
- Pengunggahan dan pemrosesan berkas
- Peringkasan dokumen

### Pola Utama (Lifecycle Development)
- Pembuatan halaman (inisiasi state dummy, di src/features/*/data/*Data.ts)
- Membuat types di src/features/*/types/*Types.ts
- Membuat service di src/features/*/service/*Service.ts
- Membuat hook states di src/features/*/states/*States.ts
- Membuat helper store di src/features/*/helpers/*Store.ts
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

```env
VITE_API_BASE_URL=https://api.example.com
VITE_WEBSOCKET_URL=wss://ws.example.com
VITE_CLIENT_ID=your-client-id
```

## 📚 Dokumentasi

Untuk dokumentasi lebih detail:
- [Pustaka Komponen](./docs/components.md)
- [Integrasi API](./docs/api.md)
- [Pengelolaan State](./docs/state.md)
- [Panduan Pengujian](./docs/testing.md)

## 📄 Lisensi

MIT License - lihat berkas [LICENSE](LICENSE) untuk informasi lebih lanjut.

---

Dikembangkan oleh tim Kazee AI.