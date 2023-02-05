//index.js Andy Bandela 301282674 5/02/2023
let express = require('express');
let router = express.Router();

// GET home page 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
//Redirecting users to the home page after subimitting the form on the contact page
router.post('/',(req,res,next)=>{
  res.redirect('/');
});

//GET about page
router.get('/',(req,res,next)=>{
  res.render('about',{title:"About Me"});
});

//GET contact page
router.get('/',(req,res,next)=>{
  res.render('contact',{title:"Contact Me"});
});

//GET projects page
router.get('/',(req,res,next)=>{
  res.render('projects',{title:"Projects"});
});

//GET services page
router.get('/',(req,res,next)=>{
  res.render('services',{title:"Services"});
});

module.exports = router;
