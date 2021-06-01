const router = require('express').Router();
const {getAllBreakfastItems} = require('../controllers/menuController');

router.get('/breakfast',getAllBreakfastItems);



module.exports = router;