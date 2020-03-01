const express = require("express");

const product = require("../helpers/models/productSchema");

// module.exports = router;

function getProduct(req, res) {
  const product1 = new product({ name: "ecosports", cat_ID: 1 });
  product1.save(function(err) {
    if (err)
      // ...
      console.log("meow");
  });

  res.send("getting product");
}

//module.exports.addProduct = addProduct;
module.exports.getProduct = getProduct;
