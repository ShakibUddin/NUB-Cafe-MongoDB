const router = require('express').Router();
const menuController = require('../controllers/menuController');

router.get('/rice',menuController.getAllRiceItems);
router.get('/curry',menuController.getAllCurryItems);
router.get('/drinks',menuController.getAllDrinksItems);
router.get('/disserts',menuController.getAllDissertItems);
router.post('/insert',menuController.insertItem);
router.post('/delete',menuController.deleteItem);

module.exports = router;