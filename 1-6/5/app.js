const express = require("express");
const app = express();
const pages = require("./router/pages.js");

app.use('/pages',pages);

app.listen(5500);
console.log("server5 is running ");