
# Vascomm — E-commerce Demo (Next.js + TypeScript)

Vascomm adalah aplikasi e-commerce demonstrasi yang dibuat dengan Next.js (App Router) dan TypeScript. Aplikasi ini menyertakan fitur otentikasi (Firebase Auth), panel admin untuk manajemen produk dan pengguna, dashboard ringkasan, serta API route untuk operasi CRUD produk dan pengguna.

**Fitur utama**
- Autentikasi pengguna (register, login, logout) menggunakan Firebase Auth
- Panel admin dilindungi untuk manajemen produk & pengguna
- API route untuk produk, pengguna, dan ringkasan dashboard
- Upload gambar, slider produk, dan tampilan produk publik
- Email notifikasi pendaftaran (melalui Nodemailer)

**Tech stack**
- Next.js (App Router)
- React + TypeScript
- Tailwind / PostCSS
- Firebase (Auth + Firestore)
- Zod (validasi)
- Zustand (state management)
- Axios (HTTP client)
- JWT untuk token sisi-server
- Nodemailer untuk pengiriman email

## Daftar Perintah (Scripts)

Jalankan perintah di root proyek:

```bash
npm install
npm run dev      # jalankan development server
npm run build    # build untuk produksi
npm run start    # jalankan hasil build
npm run lint     # jalankan linter
```

## Prasyarat
- Node.js (disarankan v18+)
- Akun Firebase (Authentication + Firestore)
- Akun Gmail dengan App Password (atau SMTP provider lain) untuk pengiriman email

## Variabel Lingkungan
Buat file `.env` di root (atau atur pada platform deploy) dengan variabel berikut. Contoh ada di `.env.example`.

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_API_BASE_URL` (opsional — default `http://localhost:3000/api`)
- `JWT_SECRET`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`

## Setup Firebase singkat
1. Buat project di Firebase Console.
2. Aktifkan Authentication (Email/Password).
3. Buat Firestore database (mode pengembangan untuk pengujian).
4. Salin konfigurasi Firebase dan set variabel `NEXT_PUBLIC_FIREBASE_*` di `.env`.

## Menjalankan secara lokal

1. Install dependensi:

```bash
npm install
```

2. Buat file `.env` berdasarkan `.env.example` dan isi nilai yang diperlukan.

3. Jalankan development server:

```bash
npm run dev
```

4. Buka http://localhost:3000

## Ringkasan API Endpoints
Berikut ringkasan endpoint yang tersedia di `src/app/api`:

- `POST /api/auth/login` — autentikasi pengguna, set httpOnly cookie `token`.
- `POST /api/auth/register` — registrasi pengguna (mengirim password via email).
- `GET  /api/auth/logout` — logout (hapus cookie `token`).
- `GET  /api/dashboard/summary` — ambil ringkasan untuk dashboard (jumlah pengguna, produk, dll).
- `GET  /api/product` — daftar produk (filter via query params).
- `POST /api/product` — buat produk baru.
- `POST /api/product/[id]` — update produk.
- `DELETE /api/product/[id]` — hapus produk.
- `GET  /api/user` — daftar pengguna.
- `POST /api/user/[id]` — update pengguna.
- `DELETE /api/user/[id]` — hapus pengguna.

Catatan: Lihat kode di `src/app/api/*` untuk detail body request dan contoh response.

## Struktur Proyek (singkat)

- `src/app` — routes dan layout Next.js (App Router)
- `src/module` — fitur modular: `auth`, `dashboard`, `home`, `product`, `user`
- `src/shared` — komponen bersama, util, middleware, dan konfigurasi Firebase/JWT/mailer

Contoh file penting:
- `src/shared/lib/firebase.ts` — inisialisasi Firebase
- `src/shared/lib/jwt.ts` — helper sign/verify JWT
- `src/shared/lib/mailer.ts` — konfigurasi Nodemailer
- `src/app/api` — route handlers untuk API server

## Deployment
- Direkomendasikan deploy ke Vercel (Next.js). Pastikan semua env vars diset di pengaturan project Vercel.
- Untuk produksi: set cookie `secure` (HTTPS), atur `JWT_SECRET` kuat, dan gunakan provider email yang sesuai (SendGrid, SES, dll.) jika Gmail tidak memadai.
- Pastikan aturan Firestore diatur dengan benar untuk produksi.

## Troubleshooting
- Tidak ada test otomatis dalam repo ini.
- Jika mengalami masalah pengiriman email dengan Gmail, gunakan App Password atau pakai provider SMTP lain.
- Jika ada masalah auth, periksa konfigurasi `NEXT_PUBLIC_FIREBASE_*` dan rules Firestore.

## Kontribusi
Pull request dan issues diterima. Sertakan penjelasan singkat dan langkah reproduksi untuk bug.

