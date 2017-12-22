let mysql = require("mysql");
let connection = mysql.createConnection({
  port: process.env.port || 3306,
  host: "localhost",
  user: "root",
  password: "1234",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId);
});

module.exports = connection;
