const express = require("express");
const app = express();

app.get(`/`, (req, res) => {
  console.log("Data send by the client: ", req.query.id);
  res.send("<h1>This is our main Page</h1>");
});

app.get("/about", (req, res) => {
    res.send(`
        <input type="text" placeholder="Enter your name" value="${req.query.name}" />
        <button>Submit</button>
        <a href="/">Home</a>
    `);
});

app.get(`/data`, (req, res) => {
    res.send([
      {
        name: "Ved",
        age: 16,
        country: "India",
      },
      {
        name: "Dev",
        age: 17,
        country: "India",
      },
    ]);
  });

app.listen(5002);
