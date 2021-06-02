var fs = require("fs");
//dhsjhgjf

module.exports =function(req,res,next){
    let {userId, approveAll} = req.body; 
    console.log(approveAll) ;
      let rawdata = fs.readFileSync('./userData.json');
      let data = JSON.parse(rawdata);
      data.usersData.forEach((user)=>{
              if(user.userId==userId && approveAll =="N")
              {
                  user.userApproved ="Y";
              } 
              if(approveAll =="Y"){
                  user.userApproved ="Y";
              }
              
            })

      fs.writeFile("./userData.json", JSON.stringify(data, null, 4), (err) => {
         if (err) {

              console.error(err);
              return;
          };
          console.log("Member has been approved Successfully");
          let rawdataNew = fs.readFileSync('./userData.json');
          let data = JSON.parse(rawdataNew);
          let newData = data.usersData.filter((element,index_no) =>element.userApproved !='Y');
          res.json(newData);
       });       
}