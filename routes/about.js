let express = require('express');
let router = express.Router();

//GET about page
router.get('/about',(req,res,next)=>{
  res.render('index',{title:"About Me"});
});

module.exports = router;
