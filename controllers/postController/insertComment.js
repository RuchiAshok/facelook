var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');
var readCommentDBController = require('../../helpers/readCommentDB');
var insertCommentDBController = require('../../helpers/insertCommentDB');


module.exports = async function (req, res, next) {
  let {index,commentData} = req.body; 
  let postId= parseInt(index);
  
  let comment = await readCommentDBController(postId);
  console.log(comment);
 
  let commentId= 1;

    if(comment !=null || comment !=undefined){
        let CommentCount = comment.length;
        commentId = parseInt(CommentCount)+1;
        console.log(commentId);
    }

    console.log('postid'+ postId);
    console.log('commentid'+ commentId);
    let commentInsert = await insertCommentDBController(postId,commentData);
    console.log(commentInsert);
  
  var newObject = {
    commentId:commentId,
    content:commentData
};

    let data = await readPostDataController();
    data.postData[postId].comments.push(newObject);
    
    let dataNew = await writePostDataController(data);
    res.json(dataNew.postData);   
}

// module.exports = async function (req, res, next) {
//     let {index,commentData} = req.body;   
//     let i= parseInt(index);  
//     var newObject = {
//       text:commentData
//   };

//       let data = await readPostDataController();
//       data.postData[i].comments.push(newObject);
      
//       let dataNew = await writePostDataController(data);
//       res.json(dataNew.postData);   
// }