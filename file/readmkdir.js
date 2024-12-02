
const fs = require('fs');
const path = require('path');

// Define the file path
const dirPath = path.join(__dirname, 'new-folder');
const filePath = path.join(dirPath, 'example.txt');

// Ensure the directory exists
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('Directory created:', dirPath);
}

// Ensure the file exists
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'This is a directory file', 'utf8');
    console.log('File created:', filePath);
}

// Fetch and log file stats
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('Error fetching stats:', err.message);
        return;
    }
    console.log('File create successfully', stats);
});


