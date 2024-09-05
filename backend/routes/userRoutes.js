const express =  require('express');
const router =  express.Router();
const userControlller = require('../controllers/userController');



router.get('/' , userControlller.getAllUsers);
router.post('/', userControlller.addUser);
router.delete('/:id',userControlller.deleteUser)


module.exports = router;