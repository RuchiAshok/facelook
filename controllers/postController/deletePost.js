
var readPostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readPostData');
var writePostDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writePostData');


module.exports = async function (req, res, next) {

    let {index} = req.body;   
    //  console.log(index);
        let data = await readPostDataController();
        data.postData.splice(index,1);

        let dataNew = await writePostDataController(data);
        res.json(dataNew.postData);   
}