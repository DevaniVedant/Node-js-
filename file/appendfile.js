//Asynchronous
const fs = require("fs");
fs.appendFile('example.txt', '\nAppending this text.', (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console.log('Text appended successfully!');
});

//Synchronous

try {
    fs.appendFileSync('example.txt', '\nAppending synchronously.');
    console.log('Text appended successfully!');
} catch (err) {
    console.error('Error appending to the file:', err);
}
