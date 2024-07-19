const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1> Plese log in <h1> ");
});
app.get("/logout", (req, res) => {
  res.send("<h1>Logout<h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
