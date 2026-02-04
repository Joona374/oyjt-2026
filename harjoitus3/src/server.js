const express = require("express");
const utilslib = require("./utils");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello"));

app.get("/hex2rgb", (req, res) => {
  const hex = req.query.hex;
  res.send(String(utilslib.hex2rgb(hex)));
});

app.get("/rgb2hex", (req, res) => {
  const rgb = req.query.rgb;
  res.send(String(utilslib.rgb2hex(rgb)));
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Server: localhost:${port}`));
}

module.exports = app;
