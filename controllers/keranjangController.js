const Keranjang = require('../models/keranjang');
const Product = require('../models/product');

const keranjangController = {
  async addToCart(req, res) {
    let { productId, quantity } = req.body;
    productId = parseInt(productId, 10); // Parse productId as an integer (base 10)
    quantity = parseInt(quantity, 10); 
    const userId = req.user.userId; // Assuming you have user authentication

    try {
      // Check if product exists
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Check if item already in cart, if so, update quantity
      let cartItem = await Keranjang.findOne({ where: { userId, productId } });
      if (cartItem) {
        cartItem.quantity += quantity;
        await cartItem.save();
      } else {
        // Create new cart item
        cartItem = await Keranjang.create({ userId, productId, quantity });
      }

      res.status(201).json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  },

  async getCartItems(req, res) {
    const userId = req.user.userId;

    try {
      const cartItems = await Keranjang.findAll({
        where: { userId },
        include: Product // Include product details
      });
      res.json(cartItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch cart items' });
    }
  },

  async updateCartItem(req, res) {
    const itemId  = req.params.id;
    let { quantity } = req.body;
    quantity = parseInt(quantity, 10);
    const userId = req.user.userId;

    try {
      const cartItem = await Keranjang.findOne({ where: { id: itemId, userId } });
      if (!cartItem) {
        return res.status(404).json({ error: 'Cart item not found' });
      }

      cartItem.quantity = quantity;
      await cartItem.save();
      res.json(cartItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update cart item' });
    }
  },

  async removeCartItem(req, res) {
    const itemId  = req.params.id;
    const userId = req.user.userId;

    try {
      const cartItem = await Keranjang.findOne({ where: { id: itemId, userId } });
      if (!cartItem) {
        return res.status(404).json({ error: 'Cart item not found' });
      }

      await cartItem.destroy();
      res.json({ message: 'Cart item removed' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to remove cart item' });
    }
  }
};

module.exports = keranjangController;
