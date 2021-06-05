var express = require('express');
var router = express.Router();
const connection = require('../utilities/db');
var getPostController = require('../controllers/postController/getPost');
var insertPostController = require('../controllers/postController/insertPost');
var deletePostController = require('../controllers/postController/deletePost');
var insertCommentController = require('../controllers/postController/insertComment');
var deleteCommentController = require('../controllers/postController/deleteComment');
var getCommentController = require('../controllers/postController/getComment');
const verifyJWTMiddleWare = require('../middleware/auth.js')

 /*To get Post Data*/
  router.get('/getPost',[verifyJWTMiddleWare],getPostController);

  /*To get Comment Data*/
  router.post('/getComment',getCommentController);

 /*To insert new Post*/
  router.post('/insertPost',[verifyJWTMiddleWare],insertPostController);

  /*To delete Post*/
  router.post('/deletePost',[verifyJWTMiddleWare],deletePostController);

  /*To insert Comment*/
  router.post('/insertComment',[verifyJWTMiddleWare],insertCommentController);

  /*To delete Comment*/
  router.post('/deleteComment',[verifyJWTMiddleWare],deleteCommentController);
      
module.exports = router;
