const express = require('express');

const stateArticleController = require("../controllers/state_article");

const router = express.Router();

router.get('/', stateArticleController.getAllStatesArticles);

router.get('/:id', stateArticleController.getStateID);

router.post('/', stateArticleController.postStateArticle);

router.put('/', stateArticleController.putStateArticle);

router.delete('/:id', stateArticleController.deleteStateArticle);

module.exports = router;