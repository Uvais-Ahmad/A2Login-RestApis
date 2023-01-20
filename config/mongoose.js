const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/Auth-API');
const db = mongoose.connection;

db.on("error" , console.error.bind(console , "Error while connecting with the database "));
db.once('open',function(){
    console.log('Mongoose connected ');
})

module.exports = db;