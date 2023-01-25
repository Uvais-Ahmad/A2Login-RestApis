const express = require('express');
const router = express.Router();

app.get('/', (req , res )=>{
    return res.status(200).json({
        message : "Home For A2 LogIn Rest APIs",
        Routes : {
            UserRegister : 'https://a2-login-restapis.onrender.com/api/v1/register',
            Login : 'https://a2-login-restapis.onrender.com/api/v1/login',
            Profile : 'https://a2-login-restapis.onrender.com/api/v1/profile',
            logout : 'https://a2-login-restapis.onrender.com/api/v1/logout'
        },
        README : "Please Go through the readme file before testing the restAPI",
        READmeURL : 'https://github.com/Uvais-Ahmad/A2Login-RestApis/blob/master/README.MD'
    })
})

router.use('/api/v1',require('./users'));

module.exports = router;