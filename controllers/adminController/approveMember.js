var readUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readUserData');
var writeUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writeUserData');
var approveUserDBController = require('../../helpers/approveUser');
var readUserDBController = require('../../helpers/readDB');

module.exports =async function(req,res,next){
    let {userId, approveAll} = req.body; 
    let userData = null;
    let userApproved = await approveUserDBController(userId,approveAll);
    if(userApproved){
        let data =  await readUserDBController('Approve');
        userData= JSON.parse(JSON.stringify(data));
    }
    console.log(userData);
    res.json(userData); 
}

// module.exports =async function(req,res,next){
//     let {userId, approveAll} = req.body; 

//     let data = await readUserDataController();
//       data.usersData.forEach((user)=>{
//               if(user.userId==userId && approveAll =="N")
//               {
//                   user.userApproved ="Y";
//               } 
//               if(approveAll =="Y"){
//                   user.userApproved ="Y";
//               }
              
//             })
//             let dataNew = await writeUserDataController(data);
//             let newData = dataNew.usersData.filter((element,index_no) =>element.userApproved !='Y');
//             res.json(newData);    
// }