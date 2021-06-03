var readUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/readUserData');
var writeUserDataController = require('/Users/pujag/Node JS Application/myapp/helpers/writeUserData');

module.exports =async function(req,res,next){
    let {userId, approveAll} = req.body; 

    let data = await readUserDataController();
      data.usersData.forEach((user)=>{
              if(user.userId==userId && approveAll =="N")
              {
                  user.userApproved ="Y";
              } 
              if(approveAll =="Y"){
                  user.userApproved ="Y";
              }
              
            })
            let dataNew = await writeUserDataController(data);
            let newData = dataNew.usersData.filter((element,index_no) =>element.userApproved !='Y');
            res.json(newData);    
}