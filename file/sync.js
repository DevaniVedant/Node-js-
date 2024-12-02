const fs = require("fs");

console.log("1");

// Reading the file asynchronously
const result = fs.readFileSync("index.txt", "utf-8");
console.log(result);

console.log("2");
