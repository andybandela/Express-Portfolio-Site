let express = require('express');
let router = express.Router();

//GET projects page
router.get('/project',(req,res,next)=>{
    res.render('/project',{title:"Project"});
});

module.exports = router;