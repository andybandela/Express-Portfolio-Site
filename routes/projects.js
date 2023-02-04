let express = require('express');
let router = express.Router();

//GET projects page
router.get('/',(req,res,next)=>{
    res.render('index',{title:"Projects"});
});

module.exports = router;