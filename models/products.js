const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/path");
const p = path.join(rootDir, "data", "products.json");
const Cart = require('./cart')
const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductFromFile((products) => {
      if (this.id) {
        const existingProductIndex = products.findIndex(
          (prod) => prod.id === this.id
        );

        const updatedProduct = [...products];

        updatedProduct[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProduct), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.floor(Math.random() * 10000).toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }
  static fetchAll(cb) {
    getProductFromFile(cb);
  }

  static findById(id, cb) {
    getProductFromFile((products) => {
      const product = products.find((p) => p.id == id);

      cb(product);
    });
  }

  static deleteById(id){

    getProductFromFile(products =>{

      const product = products.find( p => p.id === id);

        const updatedProduct = products.filter(p =>p.id !== id);
        fs.writeFile(p , JSON.stringify(updatedProduct) , err=>{
          if(!err){

            Cart.deleteProduct(id , product.price);
          }
        })
  
    });
  }
};

