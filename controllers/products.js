const Product = require('../models/products');
const Cart = require('../models/cart')
// get Products
exports.getProducts =(req,res ,next)=>{

    Product.fetchAll((products)=>{

    res.render('shop' , {prods:products , pageTitle:'Shop' , length:products.length});

    })


   
}

exports.getAddProduct = ( req , res , next)=>{
     res.render('add-product' , {pageTitle:"Add Product" });
     next();
}

exports.postAddProduct = (req , res , next) =>{
    const {title , imageUrl , description , price} =  req.body;
    const newProduct = new Product(null , title , imageUrl, description ,price);
    newProduct.save();
    res.redirect('/');
}
exports.getProductById = (req , res  , next) =>{

    const {id} =  req.params;

    console.log(id);
    Product.findById( id , (product)=>{

        res.render('product' , {product});

        console.log(product)
   });


}

exports.getCart = ( req , res , next)=>{

    res.render('add-to-cart' ,{product:{}})

    console.log("In get Cart")


};

exports.postCart = (req , res ,next) =>{

    const { productId } = req.body;


    Product.findById( productId , product =>{   

        Cart.addProduct(productId , product.price);
       

    })
    res.redirect('/add-to-cart');

}

exports.getUpdateProduct = (req , res , next)=>{

    const {id} =  req.params;

    console.log("update product")

    Product.findById( id , product =>{   

       res.render('edit-product' , {product});
       

    })
}

exports.postUpdateProduct =(req , res , next)=>{


    const {title , imageUrl , description , price , id} =  req.body;
    const newProduct = new Product(id , title , imageUrl, description ,price);
    newProduct.save();
    res.redirect('/');
}

exports.postDeleteProduct = (req , res , next)=>{
    const {id} = req.body;

    Product.deleteById(id);

    res.redirect('/admin/add-product')

};