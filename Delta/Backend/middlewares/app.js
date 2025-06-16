const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

// //middleware
// app.use((req, res) => {
//   console.log("Hi, I am middleware");
//   res.send("middleware finished.");
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "ACCESS DENIED!!");
};

app.use("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("Hii I'm root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

// app.use((req, res) => {
//   res.status(404).send("Page not found");
// });

app.get("/err", (req, res) => {
  abcd = abcd;
});

// Error Handeling Middleware

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("server listening to port 8080");
});

//logger
app.use((req, res, next) => {
  req.time = Date.now();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});
