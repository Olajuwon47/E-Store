const express = require('express');
const router = express.Router();
const products = require('./products.json'); // Import the product data

// GET /api/products
router.get('/', (req, res) => {
  if (!Array.isArray(products)) {
    console.error("products.json is not an array. Wrapping it in an array.");
  res.json(products); // Send the products JSON as a response
} else {
  res.json(products); // Send the products array as a response
}
});

module.exports = router; // Export the router

