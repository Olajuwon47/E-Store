const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const productRoutes = require('./products'); // Correct import for the router

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.get('/', (req, res) => {
    res.send('Server is running. Use /api/products to access product data.');
  });

// Use the product routes at /api/products
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

