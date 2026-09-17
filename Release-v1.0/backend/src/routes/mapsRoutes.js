const router = require('express').Router();
const controller = require('../controllers/mapsController');
router.get('/search', controller.search);
module.exports = router;
