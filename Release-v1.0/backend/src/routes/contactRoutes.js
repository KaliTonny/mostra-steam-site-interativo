const router = require('express').Router();
const controller = require('../controllers/contactController');
router.post('/', controller.createContact);
module.exports = router;
