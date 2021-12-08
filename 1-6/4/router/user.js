const express = require("express");
const Router = express.Router();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "sample.json")));

Router.use(bodyParser.urlencoded({ extended: false }));
Router.use(bodyParser.json());

Router.post("/", function (req, res) {
  console.log(JSON.stringify(req.body));
  res.send("hello from user");
});

Router.post("/getUser", function (req, res) {
  let username = req.body.username;
  console.log(username);

  let found = data.filter((user) => user.username === username);
  if (username === undefined || username === "") {
    res.send("empty");
  } else if (found.length === 0) {
    res.send("no users were found");
  } else {
    res.send(found);
  }
});

module.exports = Router;
