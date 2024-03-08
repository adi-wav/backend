require("dotenv");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("aditya");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/yt", (req, res) => {
  res.send("<a href=https://www.youtube.com>yt</a>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
