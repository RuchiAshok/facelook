var fs = require("fs");

module.exports = function (req, res, next) {
    let {userName,userEmail,userMobile,userPassword,userTag,userApproved} = req.body;  
    let rawdata = fs.readFileSync('./userData.json');
    let data = JSON.parse(rawdata); 
    let userCount = data.usersData.length;
    let i = parseInt(userCount)+1;

    var newMember = {
      userId:i,
      userName: userName,
      userEmail: userEmail,
      userMobile: userMobile,
      userPassword: userPassword,
      userTag:userTag,
      userApproved: userApproved
    };
      console.log(newMember);     
      console.log(data);
      data.usersData.push(newMember);
      fs.writeFile("./userData.json", JSON.stringify(data, null, 4), (err) => {
         if (err) {
              console.error(err);
              return;
          };
          console.log("Member has been registered successfully.");
          let rawdataNew = fs.readFileSync('./userData.json');
          let dataNew = JSON.parse(rawdataNew);
          res.json(dataNew);
       });         
  }