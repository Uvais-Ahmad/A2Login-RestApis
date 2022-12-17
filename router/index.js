const express = require('express');
const router = express.Router();
const userCont = require('../controller/userController');


router.post('/api/v1/register',userCont.register);
router.get('/api/v1/login',userCont.login);

module.exports = router;