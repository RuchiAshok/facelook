var {verifyJWT} = require('/Users/pujag/Node JS Application/myapp/helpers/userAuthentication');

module.exports =async function(req,res,next){
    let token = req.headers.token;
    try{
        let isVerified = await verifyJWT(token);
        if(isVerified){
            next();
        }
    }
    catch(err){
      console.log('error: authentication middleware')
        res.send(err);

    }    
}