const express = require('express');
const router = express.Router();
const adminCont = require('../controller/adminController');


router.post('/add-course',adminCont.addCourse);

module.exports = router;