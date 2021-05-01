const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

router.get('/products', productsController.createProducts);
router.get('/customer', productsController.createCustomer)

module.exports = router;