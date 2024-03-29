const express = require("express");
const router = express.Router();
const {getContact,createContact,deleteContact,getContacts,updateContact} = require('../controllers/contactController');
const validateToken = require("../middleware/validateTokenHandler");




router.route("/").get(getContacts).post(createContact);

router.use(validateToken);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;


