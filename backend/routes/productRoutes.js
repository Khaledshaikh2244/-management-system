const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


// products endpointes
router.get('/' , productController.getAllProducts);
router.post('/',productController.addProduct);
router.put('/:id',productController.updateProduct);

module.exports = router;