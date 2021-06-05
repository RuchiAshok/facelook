var writeDBController = require('/Users/pujag/Node JS Application/myapp/helpers/insertDB');


module.exports = async function (req, res, next) {
  let {userName,userEmail,userMobile,userPassword,userTag,userApproved} = req.body; 
    var newMember = {
    userName: userName,
    userEmail: userEmail,
    userMobile: userMobile,
    userPassword: userPassword,
    userTag:userTag,
    userApproved: userApproved
  };

    let message = await writeDBController(newMember);
    console.log(message);
    res.send(message);
}

