const express = require('express');
const router = express.Router();
const userCont = require('../controller/userController');


router.post('/api/v1/register',userCont.register);
router.post('/api/v1/login',userCont.createSession);

module.exports = router;