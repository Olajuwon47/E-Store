const express = require('express');
const router = express.Router();
const products = require('./products.json'); // Import the product data

// GET /api/products
router.get('/', (req, res) => {
  res.json(products); // Send the products JSON as a response
});

module.exports = router; // Export the router
