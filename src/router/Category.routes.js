const router = require('express').Router();
const category = require('../controller/CategoryController');
const getAllDelivery = require('../controller/DeliveryController').getAllDelivery;
const verifyToken = require('../Middleware/ValidateToken');



router.post('/add-categories', verifyToken, category.addCategories);
router.get('/get-all-categories', verifyToken, category.getAllCategories);
router.get('/get-all-delivery', verifyToken, getAllDelivery);

module.exports = router;