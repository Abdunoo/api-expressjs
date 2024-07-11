const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config'); // Assuming your database config is here
const User = require('./user');
const Product = require('./product');

const Keranjang = sequelize.define('Keranjang', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1 
  },
}, {
  tableName: 'keranjang', 
});

module.exports = Keranjang;
