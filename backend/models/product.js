const mongoose = require('mongoose');
const { image } = require('../config/cloudinary');

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  image : {
    type : String,
  }
});

module.exports = mongoose.model('Product', ProductSchema);
