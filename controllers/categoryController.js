const Category = require('../models/category');
// const Product = require('../models/product');
const { createResponse } = require('../helper/responseUtils');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json(
      createResponse(
        200,
        'success create data',
        category,
      )
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllCategory = async (req, res) => {
  try {
    const category = await Category.findAll(
    //   { include: Category }
    );
    res.json(      
      createResponse(
        200,
        'success get data',
        category,
      ));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'category not found' });
    }
    res.json(
      createResponse(
        200,
        'success get detail data',
        category,
      )
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCategory = await Category.findByPk(req.params.id);
      return res.json(
        createResponse(
          200,
          'success update data',
          updatedCategory,
        )
      );
    }
    throw new Error('category not found');
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.destroy({
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
    throw new Error('Category not found');
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};