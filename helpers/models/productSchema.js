const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    length: 100,
    required: true
  },

  cat_ID: {
    type: Number,
    length: 100,
    required: true
  }
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
