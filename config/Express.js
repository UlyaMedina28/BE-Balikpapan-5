const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@ssw0rd!123',
  database: 'be_balikpapan_4'
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});

// Definisikan endpoint atau rute untuk website Anda
app.get('/', (req, res) => {
  // Lakukan kueri ke database
  db.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error querying database: ' + error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    // Gunakan data dari database untuk merender halaman website Anda
    res.json(results);
  });
});

// Port yang akan digunakan oleh server
const port = 3000;

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:3000`);
});

