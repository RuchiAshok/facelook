var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Puja@123',
    database: 'testdb',
    insecureAuth: true
  })
  
module.exports = connection;