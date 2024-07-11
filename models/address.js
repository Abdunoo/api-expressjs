const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
const Order = require('./order');
const User = require('./user');

const Address = sequelize.define('Address', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, 
  },
  name: DataTypes.STRING,
  recipient_name: DataTypes.STRING
}, {
    tableName: 'addresses', // Nama tabel dalam huruf kecil
});

module.exports = Address;
