//Asynchronous
const fs = require("fs");

fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
        return;
    }
    console.log('File deleted successfully!');
});

//Synchronous

try {
    fs.unlinkSync('index.txt');
    console.log('File deleted successfully!');
} catch (err) {
    console.error('Error deleting the file:', err);
}

