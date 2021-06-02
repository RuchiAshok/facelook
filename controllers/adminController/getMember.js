var fs = require("fs");

module.exports =function(req,res){
    let rawdata = fs.readFileSync('./userData.json');
    let data = JSON.parse(rawdata);
    let newData = data.usersData.filter((element,index_no) =>element.userApproved !='Y');
    res.json(newData);  
   }
