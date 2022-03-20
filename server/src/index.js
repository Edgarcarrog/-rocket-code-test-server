require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

//settings
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use(require("./routes/users"));

app.listen(app.get("port"), () => {
  console.log("listen on port", app.get("port"));
});
