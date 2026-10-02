const router = require('express').Router();
const controller = require('../controllers/eventController');
router.get('/', controller.listEvents);
module.exports = router;
