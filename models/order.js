const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const Address = require('./address');
const OrderDetail = require('./orderDetail');
const User = require('./user');


const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  totalAmount: DataTypes.FLOAT,
  courier_code: DataTypes.STRING,
  recipient_name: DataTypes.STRING,
  shipping_address: DataTypes.STRING,
  status: DataTypes.STRING,
}, {
    tableName: 'orders', // Nama tabel dalam huruf kecil
});

module.exports = Order;
