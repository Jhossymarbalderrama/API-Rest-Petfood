const TypeProduct = require("../models/type_products");

exports.getAllTypesProducts = async (req, res, next) => {
  try {
    const [allTypesProducts] = await TypeProduct.getAllTypesProducts();
    res.status(200).json(allTypesProducts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postTypeProduct = async (req, res, next) =>{
  try {
    const postResponse = await TypeProduct.postTypeProduct(req.body.name, req.body.type);
    res.status(200).json(postResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.putTypeProduct = async (req, res, next) =>{
  try {
    const putResponse = await TypeProduct.putTypeProduct(req.body.id, req.body.name, req.body.type);
    res.status(200).json(putResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.deleteTypeProduct = async (req, res, next) =>{
  try {
    const deleteResponse = await TypeProduct.deleteTypeProduct(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}