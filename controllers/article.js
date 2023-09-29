const Article = require("../models/article");

exports.getAllArticles = async (req, res, next) => {
  try {
    const [allArticles] = await Article.getAllArticles();
    res.status(200).json(allArticles);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postArticle = async (req, res, next) =>{
  try {
    const postResponse = await Article.postArticle(req.body.id_user, req.body.title, req.body.subtitle, req.body.description, req.body.date, req.body.id_section, req.body.state);
    res.status(200).json(postResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.putArticle = async (req, res, next) =>{
  try {
    const putResponse = await Article.putArticle(req.body.id, req.body.id_user, req.body.title, req.body.subtitle, req.body.description, req.body.date, req.body.id_section, req.body.state);
    res.status(200).json(putResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.deleteArticle = async (req, res, next) =>{
  try {
    const deleteResponse = await Article.deleteArticle(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}