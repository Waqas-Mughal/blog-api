var mysql = require('mysql');

function DB (){

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"blogging"
});
return con

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
}

module.exports = DB