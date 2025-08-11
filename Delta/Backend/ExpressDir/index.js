const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello I'm root.");
});

app.get("/apple", (req, res) => {
  res.send("hello apple.");
});

app.get(/.*/, (req, res) => {
  res.send("path is not found");
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  res.send("hello, I'm root.");
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send("No results");
});
