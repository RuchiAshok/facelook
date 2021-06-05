var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');
var deleteCommentDBController = require('../../helpers/deleteCommentDB');


module.exports = async function (req, res, next) {
  let {pIndex,cIndex} = req.body;   
  let postId= parseInt(pIndex);
  let commentId= parseInt(cIndex);
  console.log('post id  : '+postId );
  console.log('comment id  : '+commentId );
  let commentDelete = await deleteCommentDBController(postId,commentId);
     if(commentDelete){
         console.log('comment deleted successfully');
     }


  let i= parseInt(pIndex); 
    let data = await readPostDataController();

    data.postData[i].comments.splice(cIndex,1);

    let dataNew = await writePostDataController(data);
    res.json(dataNew.postData);          
}

// module.exports = async function (req, res, next) {
//     let {pIndex,cIndex} = req.body;   
//     let i= parseInt(pIndex); 
//       let data = await readPostDataController();

//       data.postData[i].comments.splice(cIndex,1);

//       let dataNew = await writePostDataController(data);
//       res.json(dataNew.postData);          
// }