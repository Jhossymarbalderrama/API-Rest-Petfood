const express = require('express');

const sectionArticleController = require("../controllers/section_article");

const router = express.Router();

router.get('/', sectionArticleController.getAllSectionsArticles);

router.post('/', sectionArticleController.postSectionArticle);

router.put('/', sectionArticleController.putSectionArticle);

router.delete('/:id', sectionArticleController.deleteSectionArticle);

module.exports = router;