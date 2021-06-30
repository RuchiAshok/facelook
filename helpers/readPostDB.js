const connection =require('../utilities/db.js');

module.exports = async function readPostDB(type) {
    try {
        let postData = await new Promise(function (resolve, reject) {      
                // connection.query(`SELECT * FROM Posts`, function (err, result, fields) {   
                    connection.query(`select posts.postId,posts.userId,posts.title,posts.content,posts.createdOn,posts.updatedOn,postUsers.userName 
                    from posts left join postUsers on posts.userId = postUsers.userId`, function (err, result, fields) {   
                    if (err)
                     throw err;
                    
                    if(result.length ==0) 
                    reject('No post found');

                    resolve(result);  
                  });
            
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while finding post from db');
            console.log(err);
            return null;
        });
        return (postData);
    } catch (err) {
        
        console.log('error while finding post data from database');
        console.log(err);
        return (null);
    }
};