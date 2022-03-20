require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

//Routes
app.use(require("./routes/users"));

app.listen(app.get("port"), () => {
  console.log("listen on port", app.get("port"));
});
