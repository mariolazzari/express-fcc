let express = require("express");
let app = express();
const { join } = require("path");
require("dotenv").config();

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
  obj.message =
    process.env.MESSAGE_STYLE === "uppercase"
      ? obj.message.toUpperCase()
      : obj.message.toLowerCase();

  res.json(obj);
});

module.exports = app;
