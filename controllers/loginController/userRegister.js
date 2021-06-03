var readUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readUserData');
var writeUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writeUserData');

module.exports = async function (req, res, next) {
    let {userName,userEmail,userMobile,userPassword,userTag,userApproved} = req.body;  
    let data = await readUserDataController();
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
      data.usersData.push(newMember);
      let dataNew = await writeUserDataController(data);
      res.json(dataNew);

  }