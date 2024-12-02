//Asynchronous
const fs = require("fs");

fs.mkdir('new-folder', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully!');
});


//synchronous
try {
    fs.mkdirSync('Sync', { recursive: true });
    console.log('Directory created successfully!');
} catch (err) {
    console.error('Error creating directory:', err);
}