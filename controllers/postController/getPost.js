var fs = require("fs");

module.exports = function (req, res, next) {
  let rawdata = fs.readFileSync('./postData.json');
  let data = JSON.parse(rawdata);
  res.json(data.postData);   
}

