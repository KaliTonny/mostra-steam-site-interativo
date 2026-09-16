const router = require('express').Router();
const controller = require('../controllers/userController');
router.put('/:id', controller.updateUser);
module.exports = router;
