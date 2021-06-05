
var readCommentDBController = require('../../helpers/readCommentDB');

module.exports = async function (req, res, next) {
   let {postId} =req.body;
   let postId1= parseInt(postId);
   let cData= null;
 
  let commentData = await readCommentDBController(postId1);
    if(commentData !=null){
      cData= JSON.parse(JSON.stringify(commentData));
      console.log(cData);
    }

 
  res.json(cData); 
}


