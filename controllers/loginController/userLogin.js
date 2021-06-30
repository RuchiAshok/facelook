

var createTokenController = require('/Users/pujag/Node JS Application/myapp/helpers/userAuthentication');
var readUserDBController = require('../../helpers/readLoginUser');

module.exports = async function (req, res, next) {

    let {userName,userPassword} = req.body;  
    let userFound = await readUserDBController(userName,userPassword);
    let token = null;
    var object ={
        jwtToken:token,
        message:'Invalid User Credentials'
    }
    if(userFound){
        let type ="userData";
        let userDetails = await readUserDBController(userName,userPassword,type);
        let data =  JSON.parse(JSON.stringify(userDetails));
       // console.log(data);
        token = await createTokenController.createJWT(userName);
        object = {...object, jwtToken:token, message:'Valid User',userDetails:data[0]};
    }
      res.send(object);
}

