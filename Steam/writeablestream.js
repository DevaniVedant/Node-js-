const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('streams!');
writableStream.end();

writableStream.on('finish', () => {
    console.log('All data written');
});
