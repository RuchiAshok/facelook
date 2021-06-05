var readUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readUserData')
var readDBController = require('/Users/pujag/Node JS Application/myapp/helpers/readDB');

module.exports =async function(req,res){
    let data =  await readDBController('Approve');
    let userData= JSON.parse(JSON.stringify(data));
    // let newData = usersData.filter((element,index) =>element.userApproved !='Y');
    res.json(userData);  
   }

// module.exports =async function(req,res){
//     let data = await readUserDataController();
//     let newData = data.usersData.filter((element,index_no) =>element.userApproved !='Y');
//     console.log(data);
//     console.log(newData);
//     res.json(newData);  
//    }
