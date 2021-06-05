const connection =require('../utilities/db.js');

module.exports = async function writeDB(data) {
    let  {userName,userEmail,userMobile,userPassword,userTag,userApproved} = data; 
    try {
        let userData = await new Promise(function (resolve, reject) { 
            var sql = `INSERT INTO PostUsers(userName, userEmail, userMobile, userpassword, userTag, userApproved) VALUES 
            ('${userName}', '${userEmail}', '${userMobile}', '${userPassword}', '${userTag}','${userApproved}')`;
            connection.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
             resolve('Success');
            });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while finding data from db');
            return null;
        });
        return (userData);
    } catch (err) {
        console.log('error while finding user data from database');
        return (null);
    }
};