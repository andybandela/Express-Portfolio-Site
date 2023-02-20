//index.js Andy Bandela 301282674 5/02/2023
let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

// GET home page 
router.get('/', indexController.homeDisplay );
//Redirecting users to the home page after subimitting the form on the contact page
router.post('/',indexController.homeRedirect);

//GET about page
router.get('/about',indexController.aboutDisplay);

//GET contact page
router.get('/contact',indexController.contactDisplay);

//GET projects page
router.get('/projects',indexController.projectsDisplay);

//GET services page
router.get('/services',indexController.servicesDisplay);

//GET displaying the Login page
router.get('/login',indexController.loginGET);
//POST processing the Login page - READ operation
router.post('/login',indexController.loginPOST);

//GET displaying the Register page
router.get('/register',indexController.registerGET);
//POST processing the Register page - CREATE operation
router.post('/register',indexController.registerPOST);

//GET processing user logout
router.get('/logout',indexController.logout);

module.exports = router;
