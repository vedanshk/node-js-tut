const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");
const { isArray } = require("util");
const rootDir = require("../utils/path");
const p = path.join(rootDir, "data", "products.json");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      console.log("product ", products);

      if (isArray(products)) {
        products.push(this);
      }

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.error(err);
      });
    });
  }
  static fetchAll(cb) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
