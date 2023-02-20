//index.js Andy Bandela 301282674 17/02/2023
const e = require('express');
let express = require('express');
let router =express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let User = require('../models/user');

//Controller handling the Home route
module.exports.homeDisplay = function(req, res, next) {
    res.render('index', { title: 'Home',logged: req.user ? req.user.username : "" });
}
module.exports.homeRedirect = (req,res,next)=>{
    res.redirect('/');
}

//Controller handling the About page
module.exports.aboutDisplay = (req,res,next)=>{
    res.render('about',{title:"About Me",logged: req.user ? req.user.username : ""});
}

//Controller handling the Contact page
module.exports.contactDisplay = (req,res,next)=>{
    res.render('contact',{title:"Contact Me",logged: req.user ? req.user.username : ""});
}

//Controller handling the Projects page
module.exports.projectsDisplay = (req,res,next)=>{
    res.render('projects',{title:"Projects",logged: req.user ? req.user.username : ""});
}

//Controller handling the Services page
module.exports.servicesDisplay = (req,res,next)=>{
    res.render('services',{title:"Services",logged: req.user ? req.user.username : ""});
}

//Controllers handling the login page
module.exports.loginGET = (req,res,next) =>{
    //checking if the user is logged in
    if (!req.user) {
        res.render('auth/login',{title:"Login",logged: req.user ? req.user.username : ""});
    } else {
        res.redirect('/');
    }
}
module.exports.loginPOST = async(req,res,next) =>{
    passport.authenticate('local',(err,user)=>{
        if(err){
            return next(err);
        }
        if(!user){
            return res.redirect('/login');
        }
        req.login(user,(err)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req,res);
    console.log(req.session);
    
}

//Controllers handling the register page
module.exports.registerGET = (req,res,next) =>{
    res.render('auth/register',{title:"Register",logged: req.user ? req.user.username : ""});
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
    passport.authenticate('local',(err,user)=>{
        if(err){
            return next(err);
        }
        if(!user){
            return res.redirect('/register');
        }
        req.login(user,(err)=>{
            if(err){
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req,res);
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