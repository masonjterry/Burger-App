let mysql = require("mysql");
let connection = mysql.createConnection({
  port: process.env.port || 3000,
  host: "localhost",
  user: "root",
  password: "1234",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  consoel.log("Server going on " + connection.threadId);
});

module.exports = connection;
