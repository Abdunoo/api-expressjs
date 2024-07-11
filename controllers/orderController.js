const { Op } = require('sequelize');
const { sequelize } = require('../config/db.config');
const Address = require('../models/address');
const Order = require('../models/order');
const OrderDetail = require('../models/orderDetail');
const Product = require('../models/product'); // Ensure you have the Product model
const User = require('../models/user');
const { setRandomFallback } = require('bcryptjs');

const orderController = {
  // Create an order with details
  async createOrder (req, res) {
    const transaction = await sequelize.transaction();
    try {
      const { addressId,courier_code, orderDetails } = req.body;

      const userId = req.user.userId;
      const address = await Address.findByPk(addressId);

      if (!userId || !address) {
        await transaction.rollback();
        return res.status(404).json({ error: 'User or address not found' });
      }

      const data= {
        userId: userId, 
        courier_code, 
        recipient_name: address.recipient_name, 
        shipping_address: address.name
      };

      const order = await Order.create(data, { transaction });

      let status = "processing";
      let totalAmount = 0;
      for (let i = 0; i < orderDetails.length; i++) {
        orderDetails[i].orderId = order.id
        orderDetails[i].productName = Math.random().toString(36).slice(2, 7);
        totalAmount += orderDetails[i].price
      }

      await OrderDetail.bulkCreate(orderDetails, { transaction });
      await order.update({ totalAmount, status }, { transaction }); // Update the order with totalAmount

      await transaction.commit();
      res.status(201).json({ order });
    } catch (error) {
      await transaction.rollback();
      res.status(500).json({ error: error.message });
    }
  },

  // Get an order by ID with its details
  async getOrderById (req, res) {
    try {
      const order = await Order.findByPk(req.params.id, { 
        include: [OrderDetail] // Eager load for performance
      });
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // get my orders
  async getOrdersByUserId(req, res) {
    try {
      const { name, page = 1, limit = 6 } = req.query;
      const userId = req.user.userId;
  
      const where = { userId };
  
      const includeOptions = [
        {
          model: OrderDetail,
          attributes: ['quantity', 'price', 'productName'],
          where: name ? { productName: { [Op.like]: `%${name}%` } } : null,
          required: !!name,
        },
      ];
  
      const orders = await Order.findAndCountAll({
        where,
        include: includeOptions,
        limit: parseInt(limit, 10),
        offset: (page - 1) * limit,
        order: [['createdAt', 'DESC']],
        subQuery: false,
        raw: true,
        nest: true,
      });
  
      res.json({
        orders: orders.rows,
        currentPage: page,
        totalPages: Math.ceil(orders.count / limit),
        totalOrders: orders.count
      }); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // ... (other methods like getOrdersByCustomerId, updateOrder, deleteOrder as needed)
};

module.exports = orderController;
