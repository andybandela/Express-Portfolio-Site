let express = require('express');
let router = express.Router();

//GET contact page
router.get('/contact',(req,res,next)=>{
    res.render('index',{title:"Contact Me"});
});

module.exports = router;

