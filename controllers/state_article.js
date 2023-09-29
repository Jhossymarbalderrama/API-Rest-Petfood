const StateArticle = require("../models/state_article");

exports.getAllStatesArticles = async (req, res, next) => {
  try {
    const [allStatesArticles] = await StateArticle.getAllStatesArticles();
    res.status(200).json(allStatesArticles);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postStateArticle = async (req, res, next) =>{
  try {
    const postResponse = await StateArticle.postStateArticle(req.body.state);
    res.status(200).json(postResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.putStateArticle = async (req, res, next) =>{
  try {
    const putResponse = await StateArticle.putStateArticle(req.body.id, req.body.state);
    res.status(200).json(putResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.deleteStateArticle = async (req, res, next) =>{
  try {
    const deleteResponse = await StateArticle.deleteStateArticle(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}