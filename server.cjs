/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database/prices_db.sqlite3");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve Vite output as static files
app.use(express.static(path.join(__dirname, "dist")));

// Serve your API endpoints
app.get("/api/data", (req, res) => {
  console.log("API Request:", req.url);
  // Handle API logic here
  res.json({ message: "Hello from the API!" });
});

app.get("/api/items", (req, res) => {
  console.log("API Request:", req.url);
  const statement = `SELECT i.item_id, i.item_name, c.category_name, p.price
  FROM items AS i
    JOIN (
      SELECT item_id, MIN(price) AS price
      FROM prices
      GROUP BY item_id
    ) AS p ON p.item_id = i.item_id
    JOIN Categories AS c ON c.category_id = i.category_id
  ORDER BY i.item_id ASC;`;
  db.all(statement, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Catch-all route for serving index.html
app.get("*", (req, res) => {
  console.log("* Request:", req.url);
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
