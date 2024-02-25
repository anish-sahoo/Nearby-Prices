/* eslint-disable no-undef */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve Vite output as static files
app.use(express.static(path.join(__dirname, 'dist')));

// Serve your API endpoints
app.get('/api/data', (req, res) => {
  console.log('API Request:', req.url);
  // Handle API logic here
  res.json({ message: 'Hello from the API!' });
});

// Catch-all route for serving index.html
app.get('*', (req, res) => {
  console.log('* Request:', req.url);
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
