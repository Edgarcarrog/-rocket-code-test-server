const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("DB is connected");

  var sql =
    "CREATE TABLE IF NOT EXISTS users_test_edgarcarrogastelum ( name VARCHAR(30) DEFAULT NULL, secondname VARCHAR(30) DEFAULT NULL, firstlastname VARCHAR(30) DEFAULT NULL, secondlastname VARCHAR(30) DEFAULT NULL, birthday VARCHAR(30) DEFAULT NULL, mail VARCHAR(50) DEFAULT NULL, phone VARCHAR(30) DEFAULT NULL)";

  mysqlConnection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = mysqlConnection;
