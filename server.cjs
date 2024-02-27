/* eslint-disable no-undef */
const express = require("express");
const path = require("path");

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
  // Handle API logic here
  res.json([
    { id: 1, name: "Item 1", description: "This is the first item" },
    { id: 2, name: "Item 2", description: "This is the second item" },
    { id: 3, name: "Item 3", description: "This is the third item" },
    { id: 4, name: "Item 4", description: "This is the fourth item" },
    { id: 5, name: "Item 5", description: "This is the fifth item" },
    { id: 6, name: "Item 6", description: "This is the sixth item" },
    { id: 7, name: "Item 7", description: "This is the seventh item" },
    { id: 8, name: "Item 8", description: "This is the eighth item" },
    { id: 9, name: "Item 9", description: "This is the ninth item" },
    { id: 10, name: "Item 10", description: "This is the tenth item" },
    { id: 11, name: "Item 11", description: "This is the eleventh item" },
    { id: 12, name: "Item 12", description: "This is the twelfth item" },
    { id: 13, name: "Item 13", description: "This is the thirteenth item" },
    { id: 14, name: "Item 14", description: "This is the fourteenth item" },
    { id: 15, name: "Item 15", description: "This is the fifteenth item" },
    { id: 16, name: "Item 16", description: "This is the sixteenth item" },
    { id: 17, name: "Item 17", description: "This is the seventeenth item" },
  ]);
});

// Catch-all route for serving index.html
app.get("*", (req, res) => {
  console.log("* Request:", req.url);
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
