//contact.js Andy Bandela 301282674 17/02/2023
let mongoose = require('mongoose');

//Creating a scheema that will structure the contact collection
let contactScheema = new mongoose.Schema({
    name: String,
    number: String,
    email: String
});

module.exports = mongoose.model("Contact",contactScheema);