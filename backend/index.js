const express = require('express');
const connnectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express(); 

// Middlewares
app.use(express.json()); 
app.use(cors()); 

// Connecting to DB
connnectDB();

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Added a route for the root URL
app.get("/", (req, res) => {
  res.send("Server is Running ! You can use these routes: http://localhost:5000/api/users and http://localhost:5000/api/products");
});

// Moved the middleware to a different route
app.get('/status', (req, res) => {
  res.send("Server is Running ! You can use these routes: http://localhost:5000/api/users and http://localhost:5000/api/products");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});