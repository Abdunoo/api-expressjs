const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');
require
const Order = require('./order');
const Address = require('./address');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: { 
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
    tableName: 'users', 
});

module.exports = User;