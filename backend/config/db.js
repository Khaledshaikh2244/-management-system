const mongoose = require('mongoose');

require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to DB");


    } catch (error) {
        console.error('Mongoose conecction :error', error);
        process.exit(1);
    }
}

module.exports = connectDB;