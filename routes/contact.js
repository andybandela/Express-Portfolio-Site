let express = require('express');
let router = express.Router();

//GET contact page
router.get('/',(req,res,next)=>{
    res.render('index',{title:"Contact Me"});
});

module.exports = router;

