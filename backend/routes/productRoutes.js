const express = require('express');
const router = express.Router();
const upoload = require('../middleware/multer');
const productController = require('../controllers/productController');


// products endpointes
router.get('/' , productController.getAllProducts);
router.post('/',upoload.single('image'),productController.addProduct);
router.put('/:id',upoload.single('image') ,productController.updateProduct);


module.exports = router;