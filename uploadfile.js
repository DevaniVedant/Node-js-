var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, response) {
    var writefile = fs.createWriteStream("README_copy.md");
    request.pipe(writefile);

    request.on("end", function () {
      response.end("uploaded");
    });
  })
  .listen(8080);
  console.log('Listening on port 8080...');
