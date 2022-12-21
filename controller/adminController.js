const Course = require('../models/course');
module.exports.addCourse = async function( req , res ){

    let isAdmin = req.user.isAdmin;

    if( ! req.body){
        return res.status(400).json({
            message : "Please enter all values"
        })
    }
    if( !isAdmin ){
        return res.status(401).json({
            message : "Admin Auth Failed"
        })
    }
    let course = await Course.create(req.body);

    return res.status(200).json({
        message : "Added course",
        data : {
            course : course
        }
    })
}