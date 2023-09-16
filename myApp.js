let express = require("express");
let app = express();
const { join } = require("path");
require("dotenv").config();
// const bodyParser = require("body-parser");

// console.log("Hello World");

app.use(express.json());
const publicPath = join(__dirname, "public");
app.use("/public", express.static(publicPath));

// logger
app.use((req, _res, next) => {
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

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;

  res.json({ echo: word });
});

app
  .route("/name")
  .get((req, res) => {
    const { first, last } = req.query;
    const name = `${first} ${last}`;

    res.json({ name });
  })
  .post((req, res) => {
    const { first, last } = req.body;
    const name = `${first} ${last}`;

    res.json({ name });
  });

module.exports = app;
