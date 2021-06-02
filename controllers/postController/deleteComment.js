var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let {pIndex,cIndex} = req.body;   
    let i= parseInt(pIndex); 
      let rawdata = fs.readFileSync('./postData.json');
      let data = JSON.parse(rawdata);
      data.postData[i].comments.splice(cIndex,1);

        fs.writeFile("./postData.json", JSON.stringify(data, null, 4), (err) => {
          if (err) {
               console.error(err);
               return;
           };
           console.log("Comment has been deleted successfully");
           let rawdataNew = fs.readFileSync('./postData.json');
           let dataNew = JSON.parse(rawdataNew);
           res.json(dataNew.postData);
        });       
}