require('dotenv').config(); 
const { sequelize } = require('./config/db.config');
const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); 
const categoryRoutes = require('./routes/categoryRoutes'); 
const addressRoutes = require('./routes/addressRoutes'); 
const userRoutes = require('./routes/authRoutes'); 
const orderRoutes = require('./routes/orderRoutes'); 
const keranjangRoutes = require('./routes/keranjangRoutes'); 
require('./models/associations'); 

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

  (async () => {
    try {
      sequelize.sync().then(() => {
      console.log("Database & tables created!");
      app.use('/api/products', productRoutes); 
      app.use('/api/category', categoryRoutes); 
      app.use('/api/address', addressRoutes); 
      app.use('/api/order', orderRoutes); 
      app.use('/api/keranjang', keranjangRoutes); 
      app.use('/api/', userRoutes);
    })
      app.listen(3000, () => {
        console.log('Server running on port 3000');
      });
    } catch (err) {
      console.error("Unable to sync database:", err);
    }
  })(); 
