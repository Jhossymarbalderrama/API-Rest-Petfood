const express = require('express');

const contactController = require("../controllers/contact");

const router = express.Router();

router.get('/', contactController.getAllContacts);

router.get('/:id_user', contactController.getContactIDUser);

router.post('/', contactController.postContact);

router.put('/', contactController.putContact);

router.delete('/:id', contactController.deleteContact);

module.exports = router;