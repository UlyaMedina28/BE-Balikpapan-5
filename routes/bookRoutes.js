const express = require('express');
const { bookController } = require('../controllers');
const router = express.Router();

// get all books
router.get('/books', bookController.getBooks);
router.post('/books', bookController.createBook);



module.exports = router;