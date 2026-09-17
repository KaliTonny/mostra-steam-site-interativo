const router = require('express').Router();
const controller = require('../controllers/authController');
router.post('/register', controller.register);
router.post('/verify-email', controller.verifyEmail);
router.post('/resend-code', controller.resendCode);
router.post('/login', controller.login);
module.exports = router;
