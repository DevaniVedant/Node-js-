const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Data send by client: ", req.query.id);
  res.send("This is our main page");
});

app.listen(3001);
