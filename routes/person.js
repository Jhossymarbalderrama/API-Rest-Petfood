const express = require('express');

const personController = require("../controllers/person");

const router = express.Router();

router.get('/', personController.getAllPersons);

router.post('/', personController.postPerson);

router.put('/', personController.putPerson);

router.delete('/:id', personController.deletePerson);

module.exports = router;