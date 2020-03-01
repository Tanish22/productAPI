//  dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/carapi");

const app = express();

//  routes
// const catRoutes = require('./routes/categoryRoutes');
// const prodRoutes = require('./routes/prodRoutes');
const prodController = require("./controllers/productController");
const categoryController = require("./controllers/categoryController");

//  middleware
app.use(logger("dev"));

//  routes
//app.use("/categories", catRoutes);app.use("/addProduct", prodController);
app.use("/getProduct", prodController.getProduct);
// app.use("/getCategory", categoryController.addCategory);
app.use("/addCategory", categoryController.addCategory);

//  404 errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

//  user defined error handler take 4 parameters
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  //respond to the client
  res.status(status).json({
    error: {
      message: error.message
    }
  });

  //respond to ourselves
  console.log(err);
});

//  start the server
const port = app.get("port") || 2200;

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});
