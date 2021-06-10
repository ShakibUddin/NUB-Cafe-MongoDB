const router = require('express').Router();
const profileController = require('../controllers/profileController');

router.post('/home',profileController.getProfileData);

module.exports = router;