const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.post('/place',orderController.placeOrder);
router.get('/all',orderController.getAllOrder);
router.delete('/remove/:id',orderController.removeOrder);

module.exports = router;

