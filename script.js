// process.argv

console.log(process.argv);


const args = process.argv.slice(2); // Remove the first two elements
console.log("Arguments:", args);