/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database/prices_db.sqlite3");

const app = express();
const PORT = process.env.PORT || 5000;

const bcrypt = require("bcrypt");
const SECRET_KEY = "fakjhrfiqhfnwaefnjkwaenfliuwae";
const jwt = require("jsonwebtoken");

// Serve Vite output as static files
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = decoded; // Attach user data to the request object
    next();
  });
};

// User registration endpoint
app.post("/api/register", async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await db.run(
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
      [username, hashedPassword, email],
    );
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during registration" });
  }
});

// User login endpoint
app.post("/api/login", async (req, res) => {
  const getDatabaseUser = (username) => {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM users WHERE user_name = ?",
        [username],
        (err, row) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(row);
        },
      );
    });
  };

  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    console.log("Request Body", req.body);
    let user = await getDatabaseUser(username);
    console.log("User", user);
    if (!user || !user.password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    console.log("password results", validPassword, password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Password is invalid" });
    }
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "30m",
    });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error during login" });
  }
});

// Serve your API endpoints
app.get("/api/data", (req, res) => {
  console.log("API Request:", req.url);
  // Handle API logic here
  res.json({ message: "Hello from the API!" });
});

// Catch-all route for serving index.html
// app.get("*", (req, res) => {
//   console.log("* Request:", req.url);
//   res.sendFile(path.join(__dirname, "dist/index.html"));
// });

// get all the items
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
      FROM Prices
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

// get all the prices for one item
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

// delete a price from the prices table
app.post("/api/items/delete/:id/:sid", verifyJWT, (req, res) => {
  console.log("API Request:", req.url);
  const itemId = req.params.id;
  const storeId = req.params.sid;
  const statement = `DELETE FROM Prices WHERE item_id = ? AND store_id = ?;`;
  db.run(statement, [itemId, storeId], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Price deleted" });
  });
});

// add a price to the prices table
app.post("/api/items/add/:id/:sid/:price", verifyJWT, (req, res) => {
  console.log("API Request:", req.url);
  const itemId = req.params.id;
  const storeId = req.params.sid;
  const price = req.params.price;
  const statement = `INSERT INTO Prices (item_id, store_id, price) VALUES (?, ?, ?);`;
  db.run(statement, [itemId, storeId, price], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Price added" });
  });
});

// update a price in the prices table
app.post("/api/items/update/:id/:sid/:price", verifyJWT, (req, res) => {
  console.log("API Request:", req.url);
  const itemId = req.params.id;
  const storeId = req.params.sid;
  const price = req.params.price;
  const statement = `UPDATE Prices SET price = ? WHERE item_id = ? AND store_id = ?;`;
  db.run(statement, [price, itemId, storeId], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Price updated" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
