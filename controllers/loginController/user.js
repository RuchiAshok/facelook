var readController = require('/Users/pujag/Node JS Application/myapp/helpers/readDB');
var writeController = require('/Users/pujag/Node JS Application/myapp/helpers/insertDB');

async function readD (req, res, next) { 
    let data =null;
    data = await readController();
    console.log(data);
    res.send(data);
}

async function writeD (req, res, next) { 
    let data1 =null;
    data1 = await readController();
    let userCount = data1.length;
    let i = parseInt(userCount)+1;
    let newData = null;

    let {userName,userEmail,userMobile,userPassword,userTag,userApproved} = req.body; 
    var newMember = {
        userId:i,
        userName: userName,
        userEmail: userEmail,
        userMobile: userMobile,
        userPassword: userPassword,
        userTag:userTag,
        userApproved: userApproved
      };
    let data =null;
    data = await writeController(newMember);
    if(data =='Success'){
        newData = await readController();
    }
    res.send(newData);
}

module.exports ={ 
    readD:readD,
    writeD:writeD
}
