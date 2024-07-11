const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const Category = require('./category');
const OrderDetail = require('./orderDetail');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  categoryId: DataTypes.INTEGER,
  stock: DataTypes.INTEGER,
  images: DataTypes.STRING,
}, {
    tableName: 'products', 
});

module.exports = Product;
