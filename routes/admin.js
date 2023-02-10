const path = require('path');

const express = require('express');

const {postAddProduct ,getAddProduct , getUpdateProduct , postUpdateProduct} = require('../controllers/products.js');
const router = express.Router();



router.post('/add-product' ,postAddProduct  );
router.get('/add-product' ,getAddProduct  );
router.get('/edit-product/:id' , getUpdateProduct)
router.post('/edit-product' , postUpdateProduct)

module.exports = router;