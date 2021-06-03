var readUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readUserData')

module.exports =async function(req,res){
    let data = await readUserDataController();
    let newData = data.usersData.filter((element,index_no) =>element.userApproved !='Y');
    res.json(newData);  
   }
