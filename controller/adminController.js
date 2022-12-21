const Course = require('../models/course');
module.exports.addCourse = async function( req , res ){
    if( ! req.body){
        return res.status(400).json({
            message : "Please enter all values"
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