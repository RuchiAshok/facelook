const connection =require('../utilities/db.js');

module.exports = async function writePostDB(newTitle,newContent,userId) {
    try {
        let postData = await new Promise(function (resolve, reject) { 
            var sql = `INSERT INTO Posts(title, content,userId) VALUES  ('${newTitle}', '${newContent}',${userId})`;
            connection.query(sql, function (err, result) {
              if (err) throw err;

              console.log("1 post inserted");
             resolve(true);
            });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while inserting post');
            return false;
        });
        return (postData);
    } catch (err) {
        console.log('error while inserting new post in db');
        return (false);
    }
};