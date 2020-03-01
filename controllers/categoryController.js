const express = require("express");

const Category = require("../helpers/models/categorySchema");


function addCategory(req, res) {
  //var dbo = db.db("carapi");

  const category = new Category({
    name: "professional",
    parent_catID: "5e5baf05cfc7bb57e0b08ce3"
  });

  category.save(function(err) {
    if (err)
      // ...
      console.log("meow");
  });

  res.send("saving category");
}
// const addCategory = (req, res) => {
//   res.send('adding category')
// }

// const getCategory = (req, res) => {
//   res.send("getting category");
// };

module.exports.addCategory = addCategory;
