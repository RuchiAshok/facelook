const connection =require('../utilities/db.js');

module.exports = async function readCommentDB(postId,type) {
    try {
        let commentData = await new Promise(function (resolve, reject) {
            if(type =='all'){
                // connection.query(`SELECT * FROM Comments`, function (err, result, fields) {   
                    connection.query(`select comments.commentId,comments.postId,comments.userId,comments.content,comments.createdOn,postUsers.userName 
                    from comments left join postUsers on comments.userId = postUsers.userId`, function (err, result, fields) {  
                    if (err)
                     throw err;
                    
                    if(result.length ==0) 
                    reject('No comment found');                   
                    resolve(result);  
                  });
            }else{
                // connection.query(`SELECT * FROM Comments where postId = ${postId}`, function (err, result, fields) {   
                    connection.query(`select comments.commentId,comments.postId,comments.userId,comments.content,comments.createdOn,postUsers.userName 
                    from comments left join postUsers on comments.userId = postUsers.userId where comments.postId = ${postId}`, function (err, result, fields) { 
                    if (err)
                     throw err;
                    
                    if(result.length ==0) 
                    reject('No comment found');
                    resolve(result);  
                  });
            }  
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while finding comments from db');
            console.log(err);
            return null;
        });
        return (commentData);
    } catch (err) {
        
        console.log('error while finding comments data from database');
        console.log(err);
        return (null);
    }
};