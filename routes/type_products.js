const express = require('express');

const typeProductController = require("../controllers/type_products");

const router = express.Router();

router.get('/', typeProductController.getAllTypesProducts);

router.post('/', typeProductController.postTypeProduct);

router.put('/', typeProductController.putTypeProduct);

router.delete('/:id', typeProductController.deleteTypeProduct);

module.exports = router;