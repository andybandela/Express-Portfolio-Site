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

module.exports = router;
