const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connect = require("./db/connect");
const loginRoute = require("./router/loginRoute");
const conversationRoute = require("./router/conversationRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//connecting to the mongodb server
connect(process.env.MONGODB_URI);

app.use("/api", loginRoute);
app.use("/api", conversationRoute);

app.listen(process.env.PORT, () => {
  console.log("the server is running at port 3001");
});
