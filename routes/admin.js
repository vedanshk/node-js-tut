const path = require('path');

const express = require('express');

const {postAddProduct ,getAddProduct} = require('../controllers/products.js');
const router = express.Router();



router.post('/add-product' ,postAddProduct  );
router.get('/add-product' ,getAddProduct  );

module.exports = router;