const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream('example.txt');
const writable = fs.createWriteStream('example.txt.gz');
const gzip = zlib.createGzip();

readable.pipe(gzip).pipe(writable); 

writable.on('finish', () => {
    console.log('File compressed successfully');
});
