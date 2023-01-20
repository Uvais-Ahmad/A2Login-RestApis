const express = require('express');
const router = express.Router();
const userCont = require('../controller/userController');
const authenticateToken = require('../config/middleware');
const { body } = require('express-validator');
//we validate at the router level

router.post('/register',
                        body('email').isEmail(),
                        body('pass').isLength({min : 8})
                        ,userCont.register);
router.post('/login',
                        body('email').isEmail(),
                        body('pass').isLength({min : 8}),
                        userCont.createSession);

router.get('/profile',authenticateToken,userCont.profile);

router.get('/logout',userCont.logOut);

module.exports = router;