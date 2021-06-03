var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');

module.exports = async function (req, res, next) {
  let data = await readPostDataController();
  res.json(data.postData); 
}

