const express = require('express');
const router = express.Router();
const userCont = require('../controller/userController');
const authenticateToken = require('../config/middleware');
const { body } = require('express-validator');
//we validate at the router level

router.post('/register',
                        body('email').isEmail().withMessage("should be email format"),
                        body('pass').isLength({min : 8}).withMessage("Must be length of 8 character"),
                        userCont.register);
router.post('/login',
                        body('email').isEmail().withMessage("should be email format"),
                        body('pass').isLength({min : 8}).withMessage("Must be length of 8 character"),
                        userCont.createSession);

router.get('/profile',authenticateToken,userCont.profile);

router.get('/logout',userCont.logOut);

module.exports = router;