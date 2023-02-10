
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const p = path.join(rootDir, "data", "cart.json");



module.exports = class Cart {

    constructor(){

        this.products = [];
        this.totalPrice = 0;

    }

    static addProduct(id , productPrice){
        fs.readFileSync(p , (err , fileContent)=>{
                let cart ={products:[] , totalPrice}
                if(!err){
                    cart = JSON.parse(fileContent);
                }
                const existingProductIndex = cart.products.findIndex( prod => prod.id ==id);
                const existingProduct = cart.products[existingProductIndex];
                let updateProduct ;

                if(existingProduct){

                    updateProduct = { ...existingProduct };
                    updateProduct.qty +=1;
                    cart.products = [...cart.products];
                    cart.products[existingProductIndex] = updateProduct;
                }else{

                    updateProduct = { id: id  , qty:1};
                    
                    cart.products = [...products , updateProduct];
                }


               cart.totalPrice += productPrice;
               fs.writeFileSync(p , JSON.stringify(cart) , err=>{
                       

                console.log(err);

               });


        })

    }
}