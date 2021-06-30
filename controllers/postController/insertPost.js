var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');
var insertPostDBController = require('../../helpers/inserNewPostDB');
var readPostDBController = require('../../helpers/readPostDB');

module.exports = async function (req, res, next) {
    let {
        newTitle,
        newContent,
        userId
    } = req.body;
    let postInsert = await insertPostDBController(newTitle, newContent,userId);
    if (postInsert) {

    }
    let data1 = await readPostDBController();
    let postData = null;
  //  console.log(data1);
    if (data1 != null) {
        postData = JSON.parse(JSON.stringify(data1));
    }
    res.json(postData);
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