const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname,"../data/cars.json"),'utf8'));
// console.log(data)t
let car = data.filter((car) => car.id == 2)
console.log(car);
console.log(car[0].id)
// console.log(car.details)