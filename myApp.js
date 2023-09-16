let express = require("express");
let app = express();
const { join } = require("path");
require("dotenv").config();

// console.log("Hello World");
const publicPath = join(__dirname, "public");
app.use("/public", express.static(publicPath));

// logger
app.use((req, res, next) => {
  const { method, path, ip } = req;

  console.log(`${method} ${path} - ${ip}`);

  next();
});

app.get("/", (_req, res) => {
  // res.send("Hello Express");
  const indexFile = join(__dirname, "views/index.html");
  res.sendFile(indexFile);
});

app.get("/json", (_req, res) => {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message });
});

app.get(
  "/now",
  (req, _res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

module.exports = app;
