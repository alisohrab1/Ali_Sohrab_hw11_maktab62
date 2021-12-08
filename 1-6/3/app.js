const express = require("express");
const app = express();
const user = require("./router/user.js");

app.use("/user" , user);


app.listen(5500);
console.log("server3 is running ");
