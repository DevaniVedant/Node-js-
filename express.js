const express = require('express');
const app = express();
 
// app.get('/', function (req, res) {
//  res.send('Hello World!');
// });

const path = require('path');
const publicPath = path.join(__dirname, 'public');  

app.use(express.static(publicPath));
 
app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});