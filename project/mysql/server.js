const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// pool 생성
const pool = mysql.createPool({
  host: "192.168.60.20",
  user: "yeon",
  password: "1234",
  database: "dev",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
});

app.get("/api/rank", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "select * from taxiRank order by score desc limit 5"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "database error" });
  }
});

app.post("/api/rank", async (req, res) => {
  const { name, score } = req.body;

  if (!name || score == null) {
    return res.result(400).json({ error: "name, score are required" });
  }
  try {
    const [result] = await pool.query(
      "insert into taxiRank(name, score) values(?, ?)",
      [name, score]
    );
    res.status(201).json({ message: "record inserted", id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "database error" });
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log(`실행중`);
});
