
const connection =require('../utilities/db.js');

module.exports = async function deleteCommentDB(postId,commentId) {
    try {
        let userData = await new Promise(function (resolve, reject) {      
            connection.query(`DELETE FROM Comments where postId = ${postId} and commentId =${commentId}`, function (err, result, fields) {       
            if (err)
             throw err; 
             console.log(result.affectedRows + " record(s) deleted");

             if(result.affectedRows !='0'){
                console.log(result.affectedRows + " record(s) deleted");
                console.log("1 Comment deleted");
                resolve(true); 
             }
             else{
                reject(false); 
             }
             
          });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while deleting comments from db');
            return false;
        });
        return (userData);
    } catch (err) {
        console.log('error while deleting comments from database');
        return (false);
    }
};