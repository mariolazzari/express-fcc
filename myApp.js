let express = require("express");
let app = express();
const { join } = require("path");

// console.log("Hello World");
const publicPath = join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (_req, res) => {
  // res.send("Hello Express");
  const indexFile = join(__dirname, "views/index.html");
  res.sendFile(indexFile);
});

module.exports = app;
