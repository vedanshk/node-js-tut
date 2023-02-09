
const products = [];
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save(){
    products.push(this);
  }
  static fetchAll(){

    return products;
  }

  static getLength(){

    return products.length;
  }


};
