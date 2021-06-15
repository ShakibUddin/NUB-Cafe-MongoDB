const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.post('/place',orderController.placeOrder);

module.exports = router;

