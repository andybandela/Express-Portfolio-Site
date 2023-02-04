let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

//GET about page
router.get('/about',(req,res,next)=>{
  res.render('index',{title:"About Me"});
});

//GET contact page
router.get('/contact',(req,res,next)=>{
  res.render('index',{title:"Contact Me"});
});

router.get('/services',(req,res,next)=>{
  res.render('index',{title:"Services"});
});

router.get('/project',(req,res,next)=>{
  res.render('/project',{title:"Project"});
});

module.exports = router;
