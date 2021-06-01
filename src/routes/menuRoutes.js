const router = require('express').Router();
const menuController = require('../controllers/menuController');

router.get('/breakfast',menuController.getAllBreakfastItems);
router.get('/lunch',menuController.getAllLunchItems);
router.get('/dinner',menuController.getAllDinnerItems);
router.get('/snack',menuController.getAllSnackItems);

module.exports = router;