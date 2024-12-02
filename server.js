// http server & built in module
const http = require("http");

const data = require("./data");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(3000);

// third party module

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });

// app.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });
