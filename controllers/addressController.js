const Address = require('../models/address'); // Import your ORM-defined model

// Controller functions
const addressController = {

  // Get all addresses
  getAllAddresses: async (req, res) => {
    try {
      const addresses = await Address.findAll({
        where: {userId: req.user.userId}
      }); // Using the ORM's findAll() method
      res.status(200).json(addresses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Get a single address by ID
  getAddressById: async (req, res) => {
    try {
      const address = await Address.findByPk(req.params.id);
      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }
      res.status(200).json(address);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // Create a new address
  createAddress: async (req, res) => {
    try {
      const newAddress = await Address.create(req.body);
      res.status(201).json(newAddress);
    } catch (err) {
      res.status(400).json({ error: err.message }); 
    }
  },

  // Update an existing address
  updateAddress: async (req, res) => {
    try {
      const [updatedRowsCount, updatedAddress] = await Address.update(req.body, {
        where: { id: req.params.id },
        returning: true, 
      });
      if (updatedRowsCount === 0) {
        return res.status(404).json({ message: 'Address not found' });
      }
      res.status(200).json(updatedAddress[0]);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // Delete an address
  deleteAddress: async (req, res) => {
    try {
      const deletedRowsCount = await Address.destroy({
        where: { id: req.params.id }
      });
      if (deletedRowsCount === 0) {
        return res.status(404).json({ message: 'Address not found' });
      }
      res.status(200).json({ message: 'Address deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

module.exports = addressController;
