//user.js Andy Bandela 301282674 17/02/2023
let mongoose = require('mongoose');
let passportLocal = require('passport-local-mongoose');

//Creating a scheema that will structure the users collection
let userScheema = new mongoose.Schema({
    username:{
        type: String,
        default: "",
        trim: true,
        required: "Username is required"
    },
    email:{
        type: String,
        default: "",
        trim: true,
        required: "Email is required"
    }
});

userScheema.plugin(passportLocal);

module.exports = mongoose.model('User',userScheema);