const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get("/", function (req, res){
    res.send("hello from admin")
})
Router.get("/getAllUsers", function (req, res){
    res.sendFile(path.join(__dirname,"sample.json"))
})
module.exports = Router;