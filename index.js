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

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
