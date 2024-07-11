const express = require('express');
const bodyParser = require('body-parser');
const keranjangController = require('../controllers/keranjangController');
const authenticateToken = require('../middleware/authMiddleware');

const app = express.Router();

app.use(bodyParser.json());
app.use(authenticateToken);

app.post('/', keranjangController.addToCart);
app.get('/', keranjangController.getCartItems);
app.put('/:id', keranjangController.updateCartItem);
app.delete('/:id', keranjangController.removeCartItem);

module.exports = app;