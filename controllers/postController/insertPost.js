var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');

module.exports = async function (req, res, next) {

    let {newTitle,newContent} = req.body;   
    var newObject = {
        title:newTitle,
        content: newContent,
        comments:[],
    };
      let data = await readPostDataController();
      data.postData.push(newObject);
      let dataNew = await writePostDataController(data);
      res.json(dataNew);
}