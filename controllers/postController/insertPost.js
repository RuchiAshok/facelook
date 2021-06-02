var fs = require("fs");
var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    let {newTitle,newContent} = req.body;   
    var newObject = {
        title:newTitle,
        content: newContent,
        comments:[],
    };
    console.log(newObject); 
      let rawdata = fs.readFileSync('./postData.json');
      let data = JSON.parse(rawdata);
      console.log(data);
      data.postData.push(newObject);
      fs.writeFile("./postData.json", JSON.stringify(data, null, 4), (err) => {
         if (err) {
              console.error(err);
              return;
          };
          console.log("File has been created successfully");
          let rawdataNew = fs.readFileSync('./postData.json');
          let dataNew = JSON.parse(rawdataNew);
          res.json(dataNew);
       });

}