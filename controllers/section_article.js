const SectionArticle = require("../models/section_article");

exports.getAllSectionsArticles = async (req, res, next) => {
  try {
    const [allSectionsArticles] = await SectionArticle.getAllSectionsArticles();
    res.status(200).json(allSectionsArticles);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postSectionArticle = async (req, res, next) =>{
  try {
    const postResponse = await SectionArticle.postSectionArticle(req.body.name);
    res.status(200).json(postResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.putSectionArticle = async (req, res, next) =>{
  try {
    const putResponse = await SectionArticle.putSectionArticle(req.body.id, req.body.name);
    res.status(200).json(putResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}

exports.deleteSectionArticle = async (req, res, next) =>{
  try {
    const deleteResponse = await SectionArticle.deleteSectionArticle(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (error) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}