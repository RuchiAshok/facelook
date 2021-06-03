var fs = require("fs");
//var readUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readUserData');

module.exports = async function writeUser(data) {
    try {
        let userData = await new Promise(function (resolve, reject) {
            fs.writeFile("./userData.json", JSON.stringify(data, null, 4), async (err) => {
                if (err) {
                     console.error(err);
                     return;
                 };
                 console.log("Member has been approved Successfully");
                 resolve(data);
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
        console.log('error while writing data');
        return (null);
    }
};
