const express = require('express');
const app = express();
const port = 8000;
//its convert form sending data to json data
app.use(express.urlencoded());


app.listen(port , function( err ){
    if(err){
        console.log('Error on running the server ')
    }
    console.log("Applicaion of Authentication success running on port ",port);
})