const express = require('express');

const articleController = require("../controllers/article");

const router = express.Router();

router.get('/', articleController.getAllArticles);

router.get('/:id', articleController.getArticleID);

router.get('/user/:id_user', articleController.getArticleIDUser);

router.post('/', articleController.postArticle);

router.put('/', articleController.putArticle);

router.delete('/:id', articleController.deleteArticle);

module.exports = router;