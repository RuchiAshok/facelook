var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');

module.exports = async function (req, res, next) {
    let {pIndex,cIndex} = req.body;   
    let i= parseInt(pIndex); 
      let data = await readPostDataController();

      data.postData[i].comments.splice(cIndex,1);

      let dataNew = await writePostDataController(data);
      res.json(dataNew.postData);          
}