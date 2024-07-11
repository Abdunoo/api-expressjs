// routes/users.js
const express = require('express');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');

const app = express.Router();

app.post('/register', authController.register);
app.post('/login', authController.login);

module.exports = app;