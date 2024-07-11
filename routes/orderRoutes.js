const express = require('express');
const bodyParser = require('body-parser');
const orderController = require('../controllers/orderController');
const authenticateToken = require('../middleware/authMiddleware');

const app = express.Router();

app.use(bodyParser.json());
app.use(authenticateToken);

app.post('/', orderController.createOrder);
app.get('/:id', orderController.getOrderById);
app.get('/', orderController.getOrdersByUserId);
// app.get('/:id', orderController.getAddressById);
// app.put('/:id', orderController.updateAddress);
// app.delete('/:id', orderController.delete);

module.exports = app;