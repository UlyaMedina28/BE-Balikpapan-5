require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log(`Method: ${req.method} ${req.path}`);
    next();
});

routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});