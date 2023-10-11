const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'mysql-21a2997b-ulyakaiforever-0eb3.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_-N8r4f8DsA_d7Dj5eyk',
  database: 'defaultdb'
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as ID ' + db.threadId);
});


app.get('/', (req, res) => {

  db.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.error('Error querying database: ' + error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    
    res.json(results);
  });
});


const port = 3000;


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:3000`);
});

