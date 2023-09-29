const Product = require("../models/products");

exports.getAllProducts = async (req, res, next) => {
  try {
    const [allProducts] = await Product.getAllProducts();
    res.status(200).json(allProducts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postProduct = async (req, res, next) =>{
  try {
    const postResponse = await Product.postProduct(req.body.id_user, req.body.title, req.body.description, req.body.id_type, req.body.date);
    res.status(200).json(postResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.putProduct = async (req, res, next) =>{
  try {
    const putResponse = await Product.putProduct(req.body.id, req.body.id_user, req.body.title, req.body.description, req.body.id_type, req.body.date);
    res.status(200).json(putResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.deleteProduct = async (req, res, next) =>{
  try {
    const deleteResponse = await Product.deleteProduct(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}