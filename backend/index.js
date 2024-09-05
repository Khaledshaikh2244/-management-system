

const express = require('express');
const connnectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express(); // Create an Express app instance

// Middlewares
app.use(express.json()); // Use JSON parsing middleware
app.use(cors()); // Use CORS middleware

// Connecting to DB
connnectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});