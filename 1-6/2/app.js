const express = require("express");
const app = express();
const path = require("path");


app.get("/", function (req, res){
    res.sendFile(path.join(__dirname,'2/index2.html'))
})
app.get("/style2.css", function (req, res){
    res.sendFile(path.join(__dirname,'2/style2.css'))
})
app.get("/script2.js", function (req, res){
    res.sendFile(path.join(__dirname,'2/script2.js'))
})
app.get("/musk.jpg", function (req, res){
    res.sendFile(path.join(__dirname,'2/musk.jpg'))
})
app.listen(5500);
console.log("server2 is running ");
