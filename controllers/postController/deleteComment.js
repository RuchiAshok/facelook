var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');
var deleteCommentDBController = require('../../helpers/deleteCommentDB');
var readCommentDBController = require('../../helpers/readCommentDB');


module.exports = async function (req, res, next) {
  let {postId,commentId} = req.body;   
  console.log('post id  : '+postId );
  console.log('comment id  : '+commentId );
  let cData =null;
  let commentDelete = await deleteCommentDBController(postId,commentId);
     if(commentDelete){
         console.log('comment deleted successfully');
     }

     let commentData = await readCommentDBController(postId);
     if (commentData != null) {
       cData = JSON.parse(JSON.stringify(commentData));
       console.log(cData);
     }
     console.log("Comment Data",cData);
     res.json(cData);         
}

// module.exports = async function (req, res, next) {
//     let {pIndex,cIndex} = req.body;   
//     let i= parseInt(pIndex); 
//       let data = await readPostDataController();

//       data.postData[i].comments.splice(cIndex,1);

//       let dataNew = await writePostDataController(data);
//       res.json(dataNew.postData);          
// }