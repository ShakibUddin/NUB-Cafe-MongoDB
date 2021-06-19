const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.post('/place',orderController.placeOrder);
router.get('/all',orderController.getAllOrder);

module.exports = router;

