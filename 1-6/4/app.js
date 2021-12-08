const express = require("express");
const PORT = 5000;
const app = express();
const user = require("./router/user");
const admin = require("./router/admin.js");

app.use("/user",user);
app.use("/admin",admin);


app.listen(PORT,() => console.log(`server is running on port : ${PORT}`));

