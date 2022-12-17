const User = require('../models/user');
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
            return res.status(200).json({
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

module.exports.login = function( req , res ){
    let data = req.body;
}
