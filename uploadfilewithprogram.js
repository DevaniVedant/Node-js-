var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    var writeFile = fs.createWriteStream("largeFile_copy");
    var fileBytes = request.headers['content-length'];

    var uploadedBytes = 0;

    request.on('readable', function () {
        var chunk = null;
        while (null !== (chunk = request.read())) {
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            response.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    });

    request.pipe(writeFile);

    request.on('end', function () {
        response.end();
    });
}).listen(8080);

console.log('Listening on port 8080...');