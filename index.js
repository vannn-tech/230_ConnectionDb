require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    pesan: "API 230_ConnectionDb berjalan",
    endpoint: ["GET /biodata", "GET /biodata/:id"],
  });
});

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
