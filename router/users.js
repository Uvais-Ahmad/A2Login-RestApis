const express = require('express');
const router = express.Router();
const userCont = require('../controller/userController');
const authenticateToken = require('../config/middleware')

router.post('/register',userCont.register);
router.post('/login',userCont.createSession);

router.get('/profile',authenticateToken,userCont.profile);

router.get('/logout',userCont.logOut);

router.use('/admin',require('./admin'));

module.exports = router;