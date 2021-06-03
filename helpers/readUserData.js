var fs = require("fs");

module.exports = async function readUser() {
    try {
        let userData = await new Promise(function (resolve, reject) {
          fs.readFile('./userData.json', function (err, data) {
                if (err) {
                  return console.log(err);
                }
                resolve(JSON.parse(data));

              });
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while finding data');
            console.log(err); //err = Could not create JWT (will be here)
            return null;
        });
        return (userData);
    } catch (err) {
        console.log('error while reading file data');
        return (null);
    }
};