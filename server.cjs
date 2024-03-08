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
  const statement = `
  SELECT 
    i.item_id, 
    i.item_name, 
    p.store_id, 
    s.name AS store_name, 
    g.latitude, 
    g.longitude, 
    c.category_name, 
    p.price
  FROM items AS i
    JOIN (
      SELECT item_id, store_id, MIN(price) AS price
      FROM prices
      GROUP BY item_id
    ) AS p ON p.item_id = i.item_id
    JOIN Categories AS c ON c.category_id = i.category_id
    JOIN Stores AS s ON s.store_id = p.store_id
    LEFT JOIN Geolocation AS g ON s.location_id = g.location_id
  ORDER BY i.item_id ASC;`;
  db.all(statement, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get("/api/items/:id", (req, res) => {
  console.log("API Request:", req.url);
  const itemId = req.params.id;
  const statement = `
  SELECT 
    s.name AS store_name, 
    s.store_id AS store_id,
    p.price AS price, 
    p.timestamp AS timestamp, 
    l.latitude AS latitude, 
    l.longitude AS longitude, 
    l.name_of_location AS address, 
    c.name AS culture_specialty, 
    e.expense_rating AS expense_rating
  FROM Stores AS s
    JOIN Prices AS p ON s.store_id = p.store_id
    JOIN Geolocation AS l ON s.location_id = l.location_id
    LEFT JOIN CultureSpecialty AS c ON s.culture_specialty_id = c.id
    JOIN ExpenseRatings AS e ON s.expense_rating_id = e.expense_rating_id
  WHERE p.item_id = ?
  ORDER BY p.price ASC
  LIMIT 5;`;
  db.all(statement, [itemId], (err, rows) => {
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
