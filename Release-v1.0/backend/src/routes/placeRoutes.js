const router = require('express').Router();
const controller = require('../controllers/placeController');
router.get('/', controller.listPlaces);
module.exports = router;
