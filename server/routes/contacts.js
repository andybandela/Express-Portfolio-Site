//contactList.js Andy Bandela 301282674 17/02/2023
let express = require('express');
let router = express.Router();
let contactController = require('../controllers/contacts');

//Helper function preventing non registered users to access a resoure
function requireAuth(req,res,next){
    //checking if user is logged in
    if(!req.isAuthenticated()){
        console.log("Not logged in");
        console.log(req.session);
        return res.redirect('/login');
    }
    console.log("already logged in");
    
    next();
}

//GET displaying the contact-list page
router.get('/',contactController.contactListRoot);

//GET displaying the Add page - CREATE operation
router.get('/add',requireAuth,contactController.addGET);
//POST processing the add page - CREATE operation
router.post('/add',requireAuth,contactController.addPOST);

//GET displaying the Update page - UPDATE operation
router.get('/update/:id',requireAuth,contactController.updateGET);

//POST processing the Update page - UPDATE operation
router.post('/update/:id',requireAuth,contactController.updatePOST);

//GET processing the Delete request and redirecting to the Contact-list page - DELETE operation
router.get('/delete/:id',requireAuth,contactController.delete);

module.exports = router;
