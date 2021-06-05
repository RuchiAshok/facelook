
var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');
var deletePostDBController = require('../../helpers/deletePostDB');


module.exports = async function (req, res, next) {

    let {index} = req.body;   
    let postId= parseInt(index);
    // need to delete comments first from db then can delete the post
    let postDelete = await deletePostDBController(postId);
       if(postDelete){
           console.log('post deleted successfully');
       }


        let data = await readPostDataController();
        data.postData.splice(index,1);

        let dataNew = await writePostDataController(data);
        res.json(dataNew.postData);   
}