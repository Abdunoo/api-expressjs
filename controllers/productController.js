const Category = require('../models/category');
const Product = require('../models/product');
const { createResponse } = require('../helper/responseUtils');

// Create product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(
      createResponse(
        200,
        'success create data',
        product,
      )
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read (Get All product)
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll(
      { include: Category }
    );
    res.json(      
      createResponse(
        200,
        'success get data',
        products,
      ));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read (Get One product)
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(
      createResponse(
        200,
        'success get detail data',
        product,
      )
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      return res.json(
        createResponse(
          200,
          'success update data',
          updatedProduct,
        )
      );
    }
    throw new Error('Product not found');
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.json(
        createResponse(
          200,
          'success delete data'
        )
      ); 
    }
    throw new Error('Product not found');
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getProductByCategory = async (req, res) => {
  try {
    const products = await Category.findByPk(req.params.id, {
      // include: [{ model: Product, where: { id: req.params.id } }], 
      include: [{model: Product}]
    });
    res.json(
      createResponse(
        200,
        'success get data by category data',
        products,
      )
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};