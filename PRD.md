# PRD — Casetudy Platform

---

## Background

Dalam proses belajar dan bekerja di dunia Product Management dan Design, sering kali muncul kebutuhan untuk mempelajari case study nyata sebagai referensi. Case study ini membantu profesional maupun mahasiswa memahami bagaimana proses riset, problem-solving, dan decision-making dilakukan dalam konteks produk yang sesungguhnya.

Namun, saat ini akses terhadap case study yang relevan dan terkurasi masih sangat terbatas. Beberapa platform besar seperti Scribd, SlideShare, atau forum komunitas memang menyediakan banyak file dan presentasi, tetapi kontennya:

- Terlalu umum dan bercampur dengan berbagai topik non-relevan
- Sulit untuk menemukan case study spesifik (misalnya hanya untuk Product Design atau Product Management)
- Sering kali tidak memiliki kualitas kurasi yang konsisten (ada yang berupa tugas kuliah mentah, bukan real case dari project nyata)

Akibatnya, banyak UI/UX Designer, Product Designer, Product Manager, dan Product Owner yang kesulitan menemukan referensi yang real, relevan, dan inspiratif untuk:

- Belajar dari studi kasus nyata
- Mencari inspirasi untuk membuat portofolio
- Membandingkan pendekatan problem-solving antar proyek

**Casetudy hadir untuk menjawab kebutuhan ini:**

> "Sebuah platform yang mengkurasi dan mempublikasikan case study berkualitas tinggi di bidang Product & Design, agar siapa pun dapat belajar dari pengalaman nyata dengan lebih mudah, cepat, dan relevan."

---

## Assumptions

### 1. User Need Assumptions

- Calon pengguna (UI/UX Designer, Product Manager, Product Designer, dan Product Owner) sering kesulitan mencari referensi case study yang relevan dan kredibel.
- Pengguna lebih suka membaca case study yang berbentuk nyata dan terstruktur, bukan sekadar artikel blog atau slide tugas kuliah.
- Ada motivasi personal dari pengguna untuk membangun portofolio dan personal branding melalui publikasi case study mereka sendiri.

### 2. Market & Behavior Assumptions

- Komunitas Product & Design di Indonesia (misal: LinkedIn, Discord, Telegram) memiliki minat tinggi terhadap konten edukatif dan showcase proyek.
- Pengguna terbiasa membaca case study dari platform luar negeri (seperti Medium, Behance, Notion, SlideShare) tapi menganggapnya kurang relevan dengan konteks lokal.
- Pengguna bersedia membuat akun dan mengunggah case study bila prosesnya mudah dan hasilnya terlihat profesional.

### 3. Technical / Product Assumptions

- MVP Casetudy dapat dikembangkan menggunakan stack web sederhana (Next.js) dalam waktu 3 bulan.
- Sistem upload dan pembacaan case study berbasis PDF atau teks editor rich content sudah cukup untuk fase awal.
- Kualitas konten awal bisa dijaga dengan kurasi manual oleh tim internal sebelum sistem rating atau moderation otomatis diterapkan.

### 4. Business Assumptions

- Ada potensi monetisasi jangka panjang dari konten premium, partnership kampus, atau recruiter access.
- Tingkat retensi pengguna akan meningkat seiring bertambahnya konten berkualitas di platform.
- Pengguna awal akan datang secara organik dari komunitas desain dan produk di media sosial.

---

## Minimum Viable Product (MVP)

| Feature | Priority | Description |
|---|---|---|
| Landing Page (Homepage) | High | Halaman utama yang memperkenalkan Casetudy, menjelaskan tujuan platform, dan menampilkan highlight section berupa beberapa contoh case study (sample). Terdapat tombol "Lihat Semua Case Study" yang mengarah ke halaman kumpulan case study. |
| Case Study List Page | High | Halaman daftar semua case study yang tersedia. Dilengkapi dengan fitur filter & search berdasarkan kategori seperti Design, PM, PO, Tools, atau Industri. |
| Case Study Detail Page | High | Halaman untuk menampilkan isi lengkap case study: judul, nama kontributor, kategori, ringkasan, dan konten case study (teks/gambar). |
| Upload Case Study | High | Halaman untuk mengunggah case study: judul, nama kontributor, kategori, ringkasan, dan konten case study (teks/gambar). |
| Navigation Bar & Footer | Medium | Komponen utama untuk navigasi (Home, Case Study, Upload, Login). Footer berisi link tambahan seperti Tentang Casetudy, Kontak, dan Syarat & Ketentuan. |
| Responsive UI (Mobile & Desktop) | Medium | Tampilan web disesuaikan agar dapat diakses dengan nyaman dari perangkat desktop dan mobile. |

---

## Requirements

### Browse Case Study

**User Story:**
Sebagai user, saya ingin bisa melihat daftar case study berdasarkan kategori (PM, UX Design, Product Owner, UI Design) agar saya bisa menemukan referensi yang relevan.

**User Acceptance Criteria:**
- User dapat melihat list case study dalam bentuk card/list
- Card menampilkan: Judul, Role, Thumbnail, Tahun
- User dapat scroll tanpa error
- List hanya menunjukkan case study yang sudah dipublish admin

**Priority:** High

---

### Search Case Study

**User Story:**
Sebagai user, saya ingin mencari case study berdasarkan keyword sehingga saya bisa menemukan referensi yang spesifik.

**User Acceptance Criteria:**
- Search bar tersedia di halaman utama
- User dapat mengetik minimal 1 huruf untuk memicu pencarian
- Hasil pencarian menampilkan case study yang relevan (judul/tag)
- Jika hasil kosong, tampilkan pesan "Case Study tidak ditemukan"

**Priority:** High

---

### Filter Case Study by Role

**User Story:**
Sebagai user, saya ingin memfilter berdasarkan role misal UI/UX Designer agar saya tidak perlu melihat semua kategori.

**User Acceptance Criteria:**
- User dapat memilih satu atau lebih kategori
- List terupdate otomatis saat filter dipilih
- Filter tetap aktif sampai user melakukan reset

**Priority:** High

---

### View Detail Case Study

**User Story:**
Sebagai user, saya ingin membaca case study dengan detail supaya memahami case study tersebut.

**User Acceptance Criteria:**
- User dapat melihat halaman detail
- Halaman detail berisi: judul, deskripsi, role, proses, dll
- Terdapat tombol share

**Priority:** High

---

### Upload / Form Internal Case Study

**User Story:**
Sebagai user, saya ingin mengunggah/membagikan hasil case study saya agar dapat tampil dan dilihat oleh semua orang di Casetudy.

**User Acceptance Criteria:**
- User melengkapi form yang tertera
- Form mencakup semua field yang dibutuhkan untuk mempublikasikan case study

**Priority:** High

---

## Out of Scope

Fitur-fitur berikut **tidak termasuk** dalam cakupan pengembangan MVP:

| Fitur | Keterangan |
|---|---|
| AI Portfolio Evaluation Tools | Fitur AI yang secara otomatis menilai, mengkurasi, atau memberikan skor terhadap portofolio pengguna. |
| AI Presentation Assistant | Fitur AI yang membantu menghasilkan materi presentasi atau ringkasan otomatis dari sebuah case study. |
| AI Case Study Structuring Tool | Fitur AI yang secara otomatis menyusun struktur case study menjadi lebih rapi, lengkap, atau profesional. |
| Educational Blog & Learning Content | Fitur blog edukasi yang membahas cara membuat case study atau portofolio yang baik, tips karir di bidang Product & Design, serta insight dari para profesional. Konten ini dapat disediakan dalam format gratis maupun premium, namun belum termasuk dalam cakupan pengembangan MVP. |


API untuk Detail Case Study
Endpoint:


GET /api/case-studies/:documentId
Contoh:


GET /api/case-studies/abc123xyz
Response yang dikembalikan:


{
  "data": {
    "id": "...",
    "image": "http://localhost:3000/uploads/cover.jpg",
    "title": "...",
    "description": "...",
    "tags": ["Tag1", "Tag2"],
    "username": "John Doe",
    "job": "Frontend Developer",
    "level": "Senior",
    "author_name": "...",
    "author_position": "...",
    "image_author": "http://localhost:3000/uploads/author.jpg"
  },
  "meta": {}
}
Catatan:

:documentId adalah documentId dari Strapi v5 (bukan integer ID biasa), biasanya berupa string alphanumeric seperti kj3h2kj4h2k3
image dan image_author sudah di-prefix dengan FRONTEND_URL dari env (default: http://localhost:3000)
Logic ada di src/api/case-study/controllers/case-study.ts:35-52