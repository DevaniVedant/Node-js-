const fs = require("fs");

console.log("1");

// Reading the file asynchronously
fs.readFile("index.txt", "utf-8", (err, result) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(result);
});

console.log("2");
