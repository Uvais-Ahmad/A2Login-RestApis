const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const passportJwt = require('./config/passport-jwt');

app.use(passport.initialize());
//its convert form sending data to json data
app.use(express.urlencoded({extended : true}));
app.use('/',require('./router'));

app.listen(port , function( err ){
    if(err){
        console.log('Error on running the server ')
    }
    console.log("Applicaion of Authentication success running on port ",port);
})