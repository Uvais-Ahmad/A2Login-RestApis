const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Auth-API');
const db = mongoose.connection;
mongoose.set('strictQuery', false);
db.on("error" , console.error.bind(console , "Error while connecting with the database "));
db.once('open',function(){
    console.log('Mongoose connected ');
})

module.exports = db;