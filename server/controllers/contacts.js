//contactList.js Andy Bandela 301282674 17/02/2023
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//using our Contact Model Scheema
let Contact = require('../models/contact');

//Controller handling the Contact-list page root route
module.exports.contactListRoot = async(req,res,next) =>{try {
    //Retrieving the data from the database and sorting in ascending order
    let contacts = await Contact.find({}).sort({name:1}).exec();
    res.render('contact/list',{title:"Contact-List", contactList:contacts});
} catch (error) {
    console.log(error.message);
}
}

//Controller handling the Add page
module.exports.addGET = async(req,res,next) =>{
    res.render('contact/add',{title:"Add Contact"});
}
module.exports.addPOST = async(req,res,next) =>{
    const cont = req.body;
    try {
        const newContact = await Contact.create({
            name: cont.contactName,
            number: cont.contactNumber,
            email: cont.contactEMail
        });
        //Print message when creation succeed
        console.log("New Contact created");
    } catch (error) {
        console.log(error.message);
    }
    res.redirect('/contact-list');

}

//Controller handling the Update page
module.exports.updateGET = async(req,res,next)=>{
    try {
        const cont = await Contact.findById(req.params.id);
        res.render('contact/update',{title:"Update Contact", contactDetail:cont})
    } catch (error) {
        console.log(error.message);
    }
}
module.exports.updatePOST = async(req,res,next) =>{
    try {
        const updateData = req.body;
        const update = await Contact.findOneAndUpdate({_id:req.params.id},{name:updateData.contactName, number:updateData.contactNumber,email:updateData.contactEMail});
        res.redirect('/contact-list');
        console.log("Update Sucessfull "+update);
    } catch (error) {
        console.log(error.message);
    }
}

//Controller handling the Delete process
module.exports.delete = async(req,res,next) =>{
    try {
        const deleted = await Contact.findByIdAndDelete({_id:req.params.id});
        res.redirect('/contact-list');
        console.log("Contact deleted Successfully :"+deleted);
    } catch (error) {
        console.log(error.message);
    }
}