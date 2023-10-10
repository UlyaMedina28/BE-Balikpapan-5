CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  judul_buku VARCHAR(255) NOT NULL,
  jumlah INT NOT NULL,
  alamat VARCHAR(255),
  deskripsi TEXT
);

CREATE TABLE records (
	id INT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  judul_buku VARCHAR(255) NOT NULL,
  jumlah INT NOT NULL,
  alamat VARCHAR(255),
  deskripsi TEXT
	);

	BEGIN;
	ALTER TABLE records ADD COLUMN recent_update timestamp;