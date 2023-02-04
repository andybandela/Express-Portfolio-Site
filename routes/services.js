let express = require('express');
let router = express.Router();

//GET services page
router.get('/services',(req,res,next)=>{
    res.render('index',{title:"Services"});
});

module.exports = router;