var fs = require("fs");

module.exports = async function readPost() {
    try {
        let postData = await new Promise(function (resolve, reject) {
          fs.readFile('./postData.json', function (err, data) {
                if (err) {
                  return console.log(err);
                }
                resolve(JSON.parse(data));

              });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while finding post data');
            return null;
        });
        return (postData);
    } catch (err) {
        console.log('error while reading post data file');
        return (null);
    }
};