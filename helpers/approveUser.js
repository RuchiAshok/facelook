const connection =require('../utilities/db.js');

module.exports = async function approveUser(userId,approveAll) {
    try {
        let userData = await new Promise(function (resolve, reject) { 
            if(approveAll == 'Y'){
                var sql = `UPDATE PostUsers SET userApproved = 'Y'`;
                connection.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("All records Approved");
                 resolve(true);
                });
                
            }else{
            var sql = `UPDATE PostUsers SET userApproved = 'Y' WHERE userId = ${userId}`;
            connection.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record Updated");
             resolve(true);
            });
            }
            
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while finding data from db');
            return false;
        });
        return (userData);
    } catch (err) {
        console.log('error while finding user data from database');
        return (false);
    }
};