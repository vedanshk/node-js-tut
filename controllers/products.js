const Product = require('../models/products');

// get Products
exports.getProducts =(req,res ,next)=>{

    Product.fetchAll((products)=>{

    res.render('shop' , {prods:products , pageTitle:'Shop' , length:products.length});

    })


   
}

exports.getAddProduct = ( req , res , next)=>{
     res.render('add-product' , {pageTitle:"Add Product" });
}

exports.postAddProduct = (req , res , next) =>{
    const {title} =  req.body;
    const newProduct = new Product(title);
    newProduct.save();
    res.redirect('/');
}