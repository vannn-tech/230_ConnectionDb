require("dotenv").config();
const express = require("express");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    pesan: "API 230_ConnectionDb berjalan",
    endpoint: ["GET /biodata", "GET /biodata/:id"],
  });
});

app.get("/biodata", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM biodata ORDER BY id ASC");
    res.json({
      status: "success",
      jumlah: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", pesan: "Gagal mengambil data", detail: err.message });
  }
});

app.get("/biodata/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ status: "error", pesan: "id harus berupa angka" });
  }
  try {
    const result = await pool.query("SELECT * FROM biodata WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ status: "error", pesan: "Data tidak ditemukan" });
    }
    res.json({ status: "success", data: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", pesan: "Gagal mengambil data", detail: err.message });
  }
});

pool
  .query("SELECT NOW()")
  .then(() => {
    console.log("Terhubung ke PostgreSQL, database:", process.env.DB_NAME);
    app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("Gagal terhubung ke PostgreSQL:", err.message);
    process.exit(1);
  });
