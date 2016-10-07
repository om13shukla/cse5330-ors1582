var mongoose= require('mongoose');

var Userschema= new mongoose.Schema({
    username: String,
    email: String,
    pass: String,
});