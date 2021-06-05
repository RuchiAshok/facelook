var fs = require("fs");
const connection =require('../utilities/db.js');

module.exports = async function readLoginDB(userName, userPassword) {
    try {
        let userData = await new Promise(function (resolve, reject) {      
            connection.query(`SELECT * FROM PostUsers where userName = '${userName}' and userPassword ='${userPassword}'`, function (err, result, fields) {       
            if (err)
             throw err;    

            if(result.length ==0) 
            reject(false);
            resolve(true);  
          });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while finding login data from db');
            return false;
        });
        return (userData);
    } catch (err) {
        console.log('error while finding login user data from database');
        return (false);
    }
};