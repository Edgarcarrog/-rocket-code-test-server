const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM users_test_edgarcarrogastelum",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/", (req, res) => {
  const {
    name,
    secondname,
    firstlastname,
    secondlastname,
    birthday,
    mail,
    phone,
  } = req.body;
  var sql = `INSERT INTO users_test_edgarcarrogastelum (name, secondname, firstlastname, secondlastname, birthday, mail, phone) VALUES ("${name}", "${secondname}", "${firstlastname}", "${secondlastname}", "${birthday}", "${mail}", "${phone}")`;
  mysqlConnection.query(sql, (err, result) => {
    if (!err) {
      res.json(result);
      console.log("1 record inserted");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
