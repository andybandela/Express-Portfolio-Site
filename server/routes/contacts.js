//contactList.js Andy Bandela 301282674 17/02/2023
let express = require('express');
let router = express.Router();
let contactController = require('../controllers/contacts');



//GET displaying the contact-list page
router.get('/',contactController.contactListRoot);

//GET displaying the Add page - CREATE operation
router.get('/add',contactController.addGET);
//POST processing the add page - CREATE operation
router.post('/add',contactController.addPOST);

//GET displaying the Update page - UPDATE operation
router.get('/update/:id',contactController.updateGET);

//POST processing the Update page - UPDATE operation
router.post('/update/:id',contactController.updatePOST);

//GET processing the Delete request and redirecting to the Contact-list page - DELETE operation
router.get('/delete/:id',contactController.delete);

module.exports = router;
