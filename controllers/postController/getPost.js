var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var readPostDBController = require('../../helpers/readPostDB');

module.exports = async function (req, res, next) {
  let data1 = await readPostDBController();
  let postData = null;

  if (data1 != null) {
    console.log(data1);
    data1.forEach(function (row) {
      console.log(row.title);
    })
    postData = JSON.parse(JSON.stringify(data1));
  }
   res.json(postData); 
}


// module.exports = async function (req, res, next) {
//   let data = await readPostDataController();
//   res.json(data.postData); 
// }