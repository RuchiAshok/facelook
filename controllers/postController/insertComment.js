var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');
var readCommentDBController = require('../../helpers/readCommentDB');
var insertCommentDBController = require('../../helpers/insertCommentDB');


module.exports = async function (req, res, next) {
  let {postId,commentData} = req.body;
  let postId1 = parseInt(postId);

  console.log('postid' + postId1);
  let commentInsert = await insertCommentDBController(postId1, commentData);
  console.log(commentInsert);

  if (commentInsert) {

  }

  let cData = null;

  let commentData1 = await readCommentDBController(postId);
  if (commentData != null) {
    cData = JSON.parse(JSON.stringify(commentData1));
    console.log(cData);
  }
  res.json(cData);

  // let data = await readPostDataController();
  // data.postData[postId].comments.push(newObject);

  // let dataNew = await writePostDataController(data);
  // res.json(dataNew.postData);   
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