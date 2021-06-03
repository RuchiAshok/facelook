var fs = require("fs");

module.exports = async function writePost(data) {
    try {
        let userData = await new Promise(function (resolve, reject) {
            fs.writeFile("./postData.json", JSON.stringify(data, null, 4), async (err) => {
                if (err) {
                     console.error(err);
                     return;
                 };
                 console.log("Post has been updated/edited Successfully");
                 resolve(data);
              });       
        }).then(function (data) {
            return data
        }).catch(function (err) {
            console.log('error while writing post data');
            return null;
        });
        return (userData);
    } catch (err) {
        console.log('error while writing post data');
        return (null);
    }
};
