const path = require("path");
const fs = require("fs");
let data = JSON.parse(fs.readFileSync(path.join(__dirname, "userData.json")));
let username = "ali";
let password = "123456";
console.log(data);

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

console.log(check(username, password));
