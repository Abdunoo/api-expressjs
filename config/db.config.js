require('dotenv').config(); // Load environment variables

const { Sequelize } = require('sequelize');

const config = {
  development: {
    username: process.env.DB_USERNAME || 'abdun',
    password: process.env.DB_PASSWORD || 'abdunpwd',
    database: process.env.DB_DATABASE || 'ecommerce_db',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    define: {
      freezeTableName: true,
      underscored: false,
    },
  },
  // ... other environments (test, production)
};

const sequelize = new Sequelize(config.development); // Create Sequelize instance

module.exports = { 
  sequelize, // Export Sequelize instance along with the configuration
  config,
};
