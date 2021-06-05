const connection = require('../utilities/db.js');

module.exports = async function writeCommentDB(postId, newComment) {
    try {
        let postData = await new Promise(function (resolve, reject) {
            var sql = `INSERT INTO Comments( postId,content) VALUES  (${postId},'${newComment}')`;
            connection.query(sql, function (err, result) {
                if (err) throw err;

                console.log("1 comment inserted");
                resolve(true);
            });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while inserting comment');
            return false;
        });
        return (postData);
    } catch (err) {
        console.log('error while inserting new comment in db');
        return (false);
    }
};