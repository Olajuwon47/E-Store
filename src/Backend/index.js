const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./products'); // Correct import for the router

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Use the product routes at /api/products
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

