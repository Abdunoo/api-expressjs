const express = require('express');
const bodyParser = require('body-parser');
const addressController = require('../controllers/addressController');
const authenticateToken = require('../middleware/authMiddleware');

const app = express.Router();

app.use(bodyParser.json());
app.use(authenticateToken);

app.post('/', addressController.createAddress);
app.get('/', addressController.getAllAddresses);
app.get('/:id', addressController.getAddressById);
app.put('/:id', addressController.updateAddress);
app.delete('/:id', addressController.deleteAddress);

module.exports = app;