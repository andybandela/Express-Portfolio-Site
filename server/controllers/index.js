//index.js Andy Bandela 301282674 17/02/2023
let express = require('express');
let router =express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let User = require('../models/user');

//Controller handling the Home route
module.exports.homeDisplay = function(req, res, next) {
    res.render('index', { title: 'Home' });
}
module.exports.homeRedirect = (req,res,next)=>{
    res.redirect('/');
}

//Controller handling the About page
module.exports.aboutDisplay = (req,res,next)=>{
    res.render('about',{title:"About Me"});
}

//Controller handling the Contact page
module.exports.contactDisplay = (req,res,next)=>{
    res.render('contact',{title:"Contact Me"});
}

//Controller handling the Projects page
module.exports.projectsDisplay = (req,res,next)=>{
    res.render('projects',{title:"Projects"});
}

//Controller handling the Services page
module.exports.servicesDisplay = (req,res,next)=>{
    res.render('services',{title:"Services"});
}

//Controllers handling the login page
module.exports.loginGET = (req,res,next) =>{
    //checking if the user is logged in
    if (!req.user) {
        res.render('auth/login',{title:"Login"});
    } else {
        res.redirect('/');
    }
}
module.exports.loginPOST = async(req,res,next) =>{
    passport.authenticate('local')(req,res,(err)=>{
        if(err){
            console.log(err.message);
            res.redirect('/login');
        }
        res.redirect('/contact-list');
    });
    console.log(req.session);
    
}

//Controllers handling the register page
module.exports.registerGET = (req,res,next) =>{
    res.render('auth/register',{title:"Login"});
}
module.exports.registerPOST = async(req,res,next) =>{
    try {
        const user = new User({username:req.body.username, email:req.body.email});
        await user.setPassword(req.body.password);
        await user.save();
        
    } catch (error) {
        res.redirect('/register');
        console.log(error.message);
    }
    passport.authenticate('local')(req,res,(err)=>{
        if(err){
            console.log(err.message);
            res.redirect('/register');
        }
        res.redirect('/contact-list');
    });
    console.log(req.session);
}

//Controller handling the logout process
module.exports.logout = (req,res,next)=>{
    try {
        req.logout(()=> {});
        res.redirect("/login");
        console.log(req.session);
    } catch (error) {
        console.log(error.message);
    }
}