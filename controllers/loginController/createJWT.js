var jwt = require('jsonwebtoken');
var {jwtKey} = require('/Users/pujag/Node JS Application/myapp/config/authKey');

module.exports = async function (userName) {
    let jwtToken = null;
    try{
        let jwtToken = await new Promise(function(){
            jwt.sign({ userName: userName }, jwtKey, function(err, token) {
                console.log(token);
              });
        }) ;
        console.log(jwtToken);
      }
      catch(err){
        jwtToken = 'error';
      }       
  }