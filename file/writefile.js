//Asynchronous
const fs = require("fs");
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing the file:', err);
        return;
    }
    console.log('File written successfully!');
});

//Synchronous

try {
    fs.writeFileSync('index.txt', 'Hello, Synchronous World!');
    console.log('File written successfully!');
} catch (err) {
    console.error('Error writing the file:', err);
}
