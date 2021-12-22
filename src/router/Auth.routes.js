
const router = require('express').Router();
const verifyToken = require('../middleware/ValidateToken');
const login = require('../controller/LoginController');




router.post('/login-email-id', login.loginController);
router.get('/renew-token-login', verifyToken, login.renewTokenLogin);



module.exports = router;