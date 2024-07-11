const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const Product = require('./product');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,
}, {
    tableName: 'categories', // Nama tabel dalam huruf kecil
});

module.exports = Category;
