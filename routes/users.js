const { response } = require('express');
var express = require('express');
var router = express.Router();
 var fs = require("fs");
const connection = require('../utilities/db')


//Database Connections

router.post('/register', function(req, res, next) {
  let{id,name,email,age} =req.body;
 
  var sampleObject = {
    id:id,
      name: name,
      member: email,
      age: age,
  };
  console.log(sampleObject); 
  let rawdata = fs.readFileSync('./users.json');
  let data = JSON.parse(rawdata);
  data.users.push(sampleObject);
  fs.writeFile("./users.json", JSON.stringify(data, null, 4), (err) => {
     if (err) {
          console.error(err);
          return;
      };
      console.log("File has been created successfully");
      let rawdataNew = fs.readFileSync('./users.json');
      let dataNew = JSON.parse(rawdataNew);
      res.json(dataNew);
     // break;
   });
    console.log("Connected!");
    var sql = `INSERT INTO users(user_id, user_name, user_age) VALUES ('${id}', '${name}', ${age})`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
     // connection.end()
    });

});

router.get('/getData', function(req, res) {
  let{id} =req.query;
        connection.query(`SELECT * FROM users where user_id = '${id}'`, function (err, result, fields) {
          
          if (err)
           throw err;
          
          if(result.length ==0) 
           throw new Error("User Not Found")  

               
           console.log(result[0]);   
          res.json(result[0]);
        });
    });
      
module.exports = router;
