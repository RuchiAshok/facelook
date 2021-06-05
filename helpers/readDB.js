const connection =require('../utilities/db.js');

module.exports = async function readDB(type) {
    try {
        let userData = await new Promise(function (resolve, reject) {      
            if (type =='Approve'){
                connection.query(`SELECT * FROM PostUsers where userApproved = 'N'`, function (err, result, fields) {   
                    if (err)
                     throw err;
                    
                    if(result.length ==0) 
                    // throw new Error("User Not Found");
                    reject(null);

                    resolve(result);  
                  });
            }else{
                connection.query(`SELECT * FROM PostUsers`, function (err, result, fields) {   
                    if (err)
                     throw err;
                    
                    if(result.length ==0) 
                    throw new Error("User Not Found");
                    resolve(result);  
                  });
            }
    
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