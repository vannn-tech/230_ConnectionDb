-- Jalankan di database "mahasiswa" (buat dulu: CREATE DATABASE mahasiswa;)

CREATE TABLE IF NOT EXISTS biodata (
  id    SERIAL PRIMARY KEY,
  nama  VARCHAR(100) NOT NULL,
  nim   VARCHAR(20)  NOT NULL UNIQUE,
  kelas VARCHAR(20)  NOT NULL
);

-- Data contoh (ganti dengan datamu sendiri)
INSERT INTO biodata (nama, nim, kelas) VALUES
  ('Nama Kamu',   '230', 'TI-5A'),
  ('Budi Santoso', '231', 'TI-5A'),
  ('Siti Aminah',  '232', 'TI-5B')
ON CONFLICT (nim) DO NOTHING;
