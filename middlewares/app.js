const express = require("express");
const ExpressError = require("./ExpressError");

const app = express();

let PORT = 8080;

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED !!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("HIIIIIIII");
});

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/random", (req, res) => {
  res.send("random page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access is forbidden");
});

app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`app is listenning to port ${PORT}`);
});
