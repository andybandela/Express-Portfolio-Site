let express = require('express');
let router = express.Router();

//GET about page
router.get('/',(req,res,next)=>{
  res.render('about',{title:"About Me"});
});

module.exports = router;
