# 230_ConnectionDb

Program **Express.js** yang terhubung ke database **PostgreSQL** dan menyediakan method **GET** untuk mengambil data dari tabel `biodata`.

## Database
- Nama database: `mahasiswa`
- Nama tabel: `biodata`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | SERIAL | Primary key |
| nama | VARCHAR(100) | Nama mahasiswa |
| nim | VARCHAR(20) | NIM (unik) |
| kelas | VARCHAR(20) | Kelas |

Perintah SQL untuk membuat tabel (ada juga di `schema.sql`):
```sql
CREATE TABLE IF NOT EXISTS biodata (
  id    SERIAL PRIMARY KEY,
  nama  VARCHAR(100) NOT NULL,
  nim   VARCHAR(20)  NOT NULL UNIQUE,
  kelas VARCHAR(20)  NOT NULL
);
```

## Endpoint
| Method | URL | Fungsi |
|--------|-----|--------|
| GET | `/` | Menampilkan info API |
| GET | `/biodata` | Mengambil semua data dari tabel biodata |
| GET | `/biodata/:id` | Mengambil satu data berdasarkan id |

## Teknologi
- Node.js dan Express.js
- PostgreSQL
- Library `pg` (koneksi database) dan `dotenv` (konfigurasi)

## Cara menjalankan
1. Install [Node.js](https://nodejs.org) dan [PostgreSQL](https://www.postgresql.org/download/).
2. install dependensi:
```bash
   npm install
```
3. Jalankan server:
```bash
   npm start
```
4. Buka `http://localhost:3000/biodata` di browser atau Postman.

## Screenshot hasil GET data

### 1. Hasil GET di browser
![GET biodata di browser](<img width="1919" height="1030" alt="Screenshot 2026-10-06 102931" src="https://github.com/user-attachments/assets/a9e66f2b-9d89-45fd-b5f1-289ba7d87804" />
)

Mengakses `http://localhost:3000/biodata` di browser menampilkan data dari tabel `biodata` dalam format JSON, berisi `id`, `nama`, `nim`, dan `kelas`.

### 2. Hasil GET di Postman
![GET biodata di Postman](<img width="1919" height="1025" alt="Screenshot 2026-10-06 103026" src="https://github.com/user-attachments/assets/0547667b-f97d-42ff-bdb1-07ba4a3c9106" />
)

Request **GET** ke `http://localhost:3000/biodata` di Postman menghasilkan status **200 OK** dengan isi JSON yang sama dengan data di PostgreSQL.

## Struktur proyek
```
230_ConnectionDb/
├── index.js        # server Express dan route GET
├── db.js           # koneksi PostgreSQL (pg Pool)
├── schema.sql      # pembuatan tabel dan data contoh
├── .env.example    # contoh konfigurasi (salin ke .env)
├── package.json
└── screenshots/    # bukti hasil GET data
```
