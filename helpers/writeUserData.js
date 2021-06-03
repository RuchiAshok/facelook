var fs = require("fs");

module.exports = async function writeUser(data) {
    try {
        let userData = await new Promise(function (resolve, reject) {
            fs.writeFile("./userData.json", JSON.stringify(data, null, 4), async (err) => {
                if (err) {
                     console.error(err);
                     return;
                 };
                 console.log("File has been written Successfully");
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
