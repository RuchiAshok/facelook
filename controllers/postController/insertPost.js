var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');
var readPostDBController = require('../../helpers/readPostDB');
var insertPostDBController = require('../../helpers/inserNewPostDB');

module.exports = async function (req, res, next) {
    let {newTitle,newContent} = req.body;   
    let post = await readPostDBController();
    let i= 1;
    if(post !=null){
        // console.logJSON.parse(JSON.stringify(post));
        let postCount = post.length;
        i = parseInt(postCount)+1;
    }
    let postInsert = await insertPostDBController(newTitle,newContent);
   // console.log(postInsert);


    var newObject = {
        postId:i,
        title:newTitle,
        content: newContent,
        comments:[],
    };
      let data = await readPostDataController();
      data.postData.push(newObject);
      let dataNew = await writePostDataController(data);
      res.json(dataNew);
}



// module.exports = async function (req, res, next) {

//     let {newTitle,newContent} = req.body;   
//     var newObject = {
//         title:newTitle,
//         content: newContent,
//         comments:[],
//     };
//       let data = await readPostDataController();
//       data.postData.push(newObject);
//       let dataNew = await writePostDataController(data);
//       res.json(dataNew);
// }