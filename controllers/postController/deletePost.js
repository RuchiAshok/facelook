var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    let {index} = req.body;   
      console.log(index);
        let rawdata = fs.readFileSync('./postData.json');
        let data = JSON.parse(rawdata);
       // console.log(data.postData.length);
        data.postData.splice(index,1);
       // console.log(data.postData);
 
          fs.writeFile("./postData.json", JSON.stringify(data, null, 4), (err) => {
            if (err) {
                 console.error(err);
                 return;
             };
             console.log("Post has been deleted successfully");
             let rawdataNew = fs.readFileSync('./postData.json');
             let dataNew = JSON.parse(rawdataNew);
             res.json(dataNew.postData);
          });       

}