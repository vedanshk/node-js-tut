const Product = require('../models/products');




// get Products
exports.getProducts =(req,res ,next)=>{


    res.render('shop' , {prods:Product.fetchAll() , pageTitle:'Shop' , length:Product.getLength()});
}

exports.getAddProduct = ( req , res , next)=>{
     res.render('add-product' , {pageTitle:"Add Product" });
}

exports.postAddProduct = (req , res , next) =>{
    const {title} =  req.body;
    const newProduct = new Product(title);
    newProduct.save();
    console.log(Product.fetchAll())
    res.redirect('/');
}