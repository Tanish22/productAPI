const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    length: 100,
    required: true
  },
  type: {
    type: String,
    length: 100,
    required: true
  }
});

const Category = mongoose.model("category", categorySchema);