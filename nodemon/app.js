require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // Import modul path untuk mengelola path file

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menggunakan path untuk mengelola path file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

