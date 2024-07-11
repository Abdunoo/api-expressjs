const express = require('express');
const bodyParser = require('body-parser');
const productController = require('../controllers/productController');
const authenticateToken = require('../middleware/authMiddleware');

const app = express.Router();

app.use(bodyParser.json());
app.use(authenticateToken);

app.post('/', productController.createProduct);
app.get('/', productController.getAllProducts);
app.get('/:id', productController.getProductById);
app.put('/:id', productController.updateProduct);
app.delete('/:id', productController.deleteProduct);
app.get('/byCategory/:id', productController.getProductByCategory);

module.exports = app;