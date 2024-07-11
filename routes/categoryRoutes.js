const express = require('express');
const bodyParser = require('body-parser');
const categoryController = require('../controllers/categoryController');
const authenticateToken = require('../middleware/authMiddleware');

const app = express.Router();

app.use(bodyParser.json());
app.use(authenticateToken);

app.post('/', categoryController.createCategory);
app.get('/', categoryController.getAllCategory);
app.get('/:id', categoryController.getCategoryById);
app.put('/:id', categoryController.updateCategory);
app.delete('/:id', categoryController.deleteCategory);

module.exports = app;