const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const Product = require('./product');
const Order = require('./order');

const OrderDetail = sequelize.define('OrderDetail', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: DataTypes.INTEGER,
  productName: DataTypes.INTEGER,
  quantity: DataTypes.FLOAT,
  price: DataTypes.FLOAT,
}, {
    tableName: 'orderDetails', // Nama tabel dalam huruf kecil
});

module.exports = OrderDetail;
