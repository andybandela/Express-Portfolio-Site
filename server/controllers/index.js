//index.js Andy Bandela 301282674 17/02/2023
let express = require('express');
let router =express.Router();

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