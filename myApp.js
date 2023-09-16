let express = require("express");
let app = express();
const { join } = require("path");

// console.log("Hello World");

app.get("/", (_req, res) => {
  // res.send("Hello Express");
  const file = join(__dirname, "views/index.html");
  res.sendFile(file);
});

module.exports = app;
