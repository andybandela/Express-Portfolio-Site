//contact.js Andy Bandela 301282674 5/02/2023
let express = require('express');
let router = express.Router();

//GET contact page
router.get('/',(req,res,next)=>{
    res.render('contact',{title:"Contact Me"});
});

module.exports = router;

