const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split(" ");

let count = 0;

for (i of input) {
  if (i !== "") {
    count++;
  }
}

console.log(count);
