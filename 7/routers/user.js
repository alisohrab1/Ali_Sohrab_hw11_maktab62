const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router();
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "userData.json")));

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/", (req, res) => {
  console.log("post req recieved");
  let username = req.body.username;
  let password = req.body.password;
  function check(username, password) {
    let foundUser = data.filter((user) => user.username === username);
    console.log(foundUser);
    if (foundUser.length >= 1) {
      let foundPass = foundUser.some((user) => user.password === password);
      if (foundPass) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  if (check(username, password)) {
    console.log("ok");
    res.send("success")
  } else {
    res.send("fail");
  }
});

router.get("/", (req, res) => {
  res.status(200).send("hello ");
});

module.exports = router;
