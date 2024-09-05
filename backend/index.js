const express =  requrie('express');
const connnectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();


const app = express();

// coneccitng to DB
connnectDB();

// middlewares
app.use('/api/products',productRoutes);
app.use('api/users',userRoutes);

const PORT =  process.env.PORT || 5000;


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});

