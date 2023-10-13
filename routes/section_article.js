const express = require('express');

const sectionArticleController = require("../controllers/section_article");

const router = express.Router();

router.get('/', sectionArticleController.getAllSectionArticles);

router.get('/:id', sectionArticleController.getSectionArticleID);

router.post('/', sectionArticleController.postSectionArticle);

router.put('/', sectionArticleController.putSectionArticle);

router.delete('/:id', sectionArticleController.deleteSectionArticle);

module.exports = router;