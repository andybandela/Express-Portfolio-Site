let express = require('express');
let router = express.Router();

//GET services page
router.get('/',(req,res,next)=>{
    res.render('services',{title:"Services"});
});

module.exports = router;