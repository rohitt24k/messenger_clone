const express = require("express");
const app = express();
require("dotenv").config();
const connect = require("./db/connect");
const loginRouter = require("./router/loginRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting to the mongodb server
connect(process.env.MONGODB_URI);

app.use("/api", loginRouter);

app.listen(process.env.PORT, () => {
  console.log("the server is running at port 3001");
});
