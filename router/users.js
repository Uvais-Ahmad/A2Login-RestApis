const express = require('express');
const router = express.Router();
const userCont = require('../controller/userController');

router.post('/register',userCont.register);
router.post('/login',userCont.createSession);

router.get('/:id/profile');

module.exports = router;