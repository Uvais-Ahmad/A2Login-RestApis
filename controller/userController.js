const User = require('../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const {body , validationResult } = require('express-validator');

module.exports.register = async function(req , res ){
    try{
        let data = req.body;
        //it checks validation at router level and result show in Controller
        let errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(412).json({ message : "Validation failed",hint : "Remember that, password must be min length 8",errors: errors.array() });
        }

        //check user passwords
        if(data.pass != data.confirm_pass){
            return res.status(401).json({
                message : "Both password and confirm password must equal"
            })
        }

        //Check user is already register
        let existUser = await User.findOne({email : data.email});
        if(existUser){
            return res.status(409).json({
                message : "Already you have an account , Please login with same mail "
            })
        }
        else{
            // Generate hash password
            let salt = await bcrypt.genSalt(saltRounds);
            let hash = await bcrypt.hash(data.pass , salt);

            //create User and store hash password
            let user = await User.create({name :data.name , email : data.email ,password : hash });
            return res.status(200).json({
                message : "Successfully Account created",
                data : {
                    user : user
                }
            })
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            message : "Error while register user"
        })
    }     
}

module.exports.createSession = async function( req , res ){
    try{
        let data = req.body;

        //it checks validation at router level and result show in Controller
        let errors = await validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(412).json({ message : "Validation failed",hint : "Remember that, password must be min length 8",errors: errors.array() });
        }

        //find via email
        
        let user = await User.findOne({email : data.email});
        
        let isMatch;
        if(user ){
            isMatch = await bcrypt.compare(data.pass , user.password);
        }
        
        if( !user || !isMatch){
            return res.status(401).json({
                message : "Invalid username and password"
                
            })
        }

        let token =await jwt.sign(user.toJSON() , 'authapi' , {expiresIn : '100000000'} );

        
        // user is found
        return res.cookie("access_token",token).status(200).json({
            message : "SignIn successfull",
            data : {
                //here we generate the token using encrpt key "codeial"
                access_token : token 
            }
        })
    }
    catch( err ){
        console.log(err)
        return res.status(400).json({
            message : "Error while login"
        })
    }
}   


module.exports.profile = function(req , res ){
    const { name , email } = req.user;

    return res.status(200).json({
        message : "Authorised",
        data : {
            name : name,
            email : email
        }
    })
}

module.exports.logOut = function(req , res ){

    // let access_token = req.cookies.access_token;

    return res.clearCookie("access_token").status(200).json({
        message : "logOut successfully"
    })
}
