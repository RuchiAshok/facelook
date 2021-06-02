var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let {index,commentData} = req.body;   
    console.log(index);
    console.log(commentData);
    let i= parseInt(index);  
    var newObject = {
      text:commentData
  };

      let rawdata = fs.readFileSync('./postData.json');
      let data = JSON.parse(rawdata);   
      data.postData[i].comments.push(newObject);     
        fs.writeFile("./postData.json", JSON.stringify(data, null, 4), (err) => {
          if (err) {
               console.error(err);
               return;
           };
           console.log("Comment Inserted successfully");
           let rawdataNew = fs.readFileSync('./postData.json');
           let dataNew = JSON.parse(rawdataNew);
           res.json(dataNew.postData);
        });     
}