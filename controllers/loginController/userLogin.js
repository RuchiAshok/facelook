var fs = require("fs");
var jwt = require('jsonwebtoken');
var {jwtKey} = require('/Users/pujag/Node JS Application/myapp/config/authKey')
var createTokenController = require('/Users/pujag/Node JS Application/myapp/helpers/userAuthentication');


module.exports = async function (req, res, next) {

    let {userName,userPassword} = req.body;  
    let rawdata = fs.readFileSync('./userData.json');
    let data = JSON.parse(rawdata); 
    let userFound =false;
    let token = null;
    var object ={
        userFound:'N',
        jwtToken:token,
        message:'Invalid UserName'
    }
    userFound = data.usersData.some((user)=>{ 
        return user.userName==userName && user.userPassword ==userPassword
    })
    if(userFound){
        //JWT Token Create
        token = await createTokenController.createJWT(userName);
        object = {...object,userFound:'Y', jwtToken:token, message:'Valid User'};
        // object.jwtToken = token;
        // object.message = 'Valid User';
    }
      console.log(object);
      res.send(object);
}
// module.exports = function (req, res, next) {

//     let {userName,userPassword} = req.body;  
//     let rawdata = fs.readFileSync('./userData.json');
//     let data = JSON.parse(rawdata); 
//     let userFound ='N';
//     let userApproved = 'N';
//     let passwordMatch = 'N';
//     let token = null;
//     var object ={
//         userFound:userFound,
//         jwtToken:token,
//         message:'Invalid UserName'
//     }
//     data.usersData.forEach((user)=>{
//         if(user.userName==userName)
//         {
//             userFound ="Y";
//         }     
//         if(userFound =="Y" && user.userPassword ==userPassword) 
//         {
//              passwordMatch = 'Y';
//         }   
//         if(userFound =="Y" && user.userPassword ==userPassword && user.userApproved =='Y') 
//         {
//             //Create JWT Koken 
//          userApproved = 'Y'
//          token = createTokenController.createJWT(userName);
//          console.log('create JWT Successful');
//          console.log(token);
//          //token = jwt.sign({ userName: userName }, 'Ruchi@123');

//         }   
//       })
//       if(userFound =='N')
//       {
          
//           object.userFound = userFound;
//           object.message = 'Invalid UserName';
//           console.log('here');
//           res.send(object);
//           return;
//       }
//       if(userApproved =='N')
//       {
//           object.userFound = userFound;
//           object.message = 'Member yet to be approved by admin';
//           res.send(object);
//           return;
//       }
//       if(userFound =='Y' && passwordMatch == 'N')
//       {
//           object.userFound = userFound;
//           object.message = 'Invalid Password'
//           res.send(object);
//           return;
//       }
//       if(userFound =='Y' && passwordMatch =='Y' && userApproved =='Y' && token != null)
//       {
//           object.userFound = userFound;
//           object.jwtToken = token
//           object.message = 'Valid User'
//           res.send(object);
//           return;
//       }    
     
//       res.send(object);


// }