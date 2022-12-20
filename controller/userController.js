const User = require('../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

module.exports.register = async function(req , res ){
    try{
        let data = req.body;
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

        // user is found
        return res.status(200).json({
            message : "SignIn successfull  , Here is your token please kept it safe",
            data : {
                //here we generate the token using encrpt key "codeial"
                token : jwt.sign(user.toJSON() , 'authapi' , {expiresIn : '10000'} ) 
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
