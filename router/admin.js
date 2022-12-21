const express = require('express');
const router = express.Router();
const adminCont = require('../controller/adminController');
const authenticateToken = require('../config/middleware');


router.post('/add-course',authenticateToken,adminCont.addCourse);

module.exports = router;