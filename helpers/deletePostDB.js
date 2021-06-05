
const connection =require('../utilities/db.js');

module.exports = async function deletePostDB(postId) {
    try {
        let userData = await new Promise(function (resolve, reject) {      
            connection.query(`DELETE FROM Posts where postId = '${postId}'`, function (err, result, fields) {       
            if (err)
             throw err;    

             
             console.log(result.affectedRows + " record(s) deleted");
             console.log("1 post deleted");
             resolve(true); 
          });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while deleting posts from db');
            return false;
        });
        return (userData);
    } catch (err) {
        console.log('error while deleting posts from database');
        return (false);
    }
};