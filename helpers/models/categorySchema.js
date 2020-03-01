const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    length: 100,
    required: true
  },
  parent_catID: {
    type: String,
    length: 100,
    required: true
  }
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
