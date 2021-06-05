var deletePostDBController = require('../../helpers/deletePostDB');
var deleteCommentDBController = require('../../helpers/deleteCommentDB');
var readPostDBController = require('../../helpers/readPostDB');

module.exports = async function (req, res, next) {

    let {postId} = req.body;   
    console.log(postId);
    let i = parseInt(postId);
    // need to delete comments first from db then can delete the post
    console.log('post to be deleted' + postId);
    let commentDelete = await deleteCommentDBController(postId,'','all');
     if(commentDelete){
         console.log('comment deleted successfully');
     }

    let postDelete = await deletePostDBController(i);
       if(postDelete){
           console.log('post deleted successfully');
       }

       let data1 = await readPostDBController();
       let postData = null;
       if(data1 !=null){
        postData = JSON.parse(JSON.stringify(data1));
       }
       res.json(postData); 
}