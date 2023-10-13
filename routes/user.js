const express = require('express');

const userController = require("../controllers/user");

const router = express.Router();

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserID);

router.post('/', userController.postUser);

router.put('/', userController.putUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;