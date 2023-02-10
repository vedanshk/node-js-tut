const path = require('path');

const express = require('express');
const {getProducts , getProductById, getCart , postCart} = require('../controllers/products.js');

const router = express.Router();

router.get('/' ,getProducts );
router.get('/products/:id' , getProductById)
router.get('/add-to-card', getCart)
router.post('/add-to-card' ,postCart)

module.exports = router;