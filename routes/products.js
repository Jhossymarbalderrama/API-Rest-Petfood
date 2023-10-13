const express = require('express');

const productController = require("../controllers/products");

const router = express.Router();

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductID);

router.get('/user/:id_user', productController.getProductIDUser);

router.post('/', productController.postProduct);

router.put('/', productController.putProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;