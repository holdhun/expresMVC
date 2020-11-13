var mysql      = require('mysql');
const dbconfig = {
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'wallet'
};

function query(sql,param,callback){
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query(sql,param,callback);
    connection.end(); 
}
module.exports = query;