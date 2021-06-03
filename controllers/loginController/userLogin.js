var createTokenController = require('/Users/pujag/Node JS Application/myapp/helpers/userAuthentication');
var readUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readUserData');

module.exports = async function (req, res, next) {

    let {userName,userPassword} = req.body;  
    let data = await readUserDataController();
    let userFound =false;
    let token = null;
    var object ={
        jwtToken:token,
        message:'Invalid User Credentials'
    }
    userFound = data.usersData.some((user)=>{ 
        return user.userName==userName && user.userPassword ==userPassword
    })
    if(userFound){
        //JWT Token Create
        token = await createTokenController.createJWT(userName);
        object = {...object, jwtToken:token, message:'Valid User'};
    }
      console.log(object);
      res.send(object);
}
