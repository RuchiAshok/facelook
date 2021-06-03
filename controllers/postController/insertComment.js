var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');

module.exports = async function (req, res, next) {
    let {index,commentData} = req.body;   
  //  console.log(index);
  //  console.log(commentData);
    let i= parseInt(index);  
    var newObject = {
      text:commentData
  };

      let data = await readPostDataController();
      data.postData[i].comments.push(newObject);
      
      let dataNew = await writePostDataController(data);
      res.json(dataNew.postData);   
}