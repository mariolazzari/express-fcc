let express = require("express");
let app = express();
const { join } = require("path");

// console.log("Hello World");
const publicPath = join(__dirname, "public");
app.use("/public", express.static(publicPath));

app.get("/", (_req, res) => {
  // res.send("Hello Express");
  const indexFile = join(__dirname, "views/index.html");
  res.sendFile(indexFile);
});

app.get("/json", (_req, res) => {
  const obj = { message: "Hello json" };
  res.json(obj);
});

module.exports = app;
