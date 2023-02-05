//projects.js Andy Bandela 301282674 5/02/2023
let express = require('express');
let router = express.Router();

//GET projects page
router.get('/',(req,res,next)=>{
    res.render('projects',{title:"Projects"});
});

module.exports = router;