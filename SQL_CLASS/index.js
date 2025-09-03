const express = require("express");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

let PORT = 8080;

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sqlpractice",
  password: "SQL@Account",
});

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// ------ Generating - Inserting New Data --------------

// let query = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(createRandomUser()); // 100 fake user's data
// }

// try {
//   connection.query(query, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();

// ----- HOME ROUTE --------------
app.get("/", (req, res) => {
  let total_users = `SELECT COUNT(*) FROM user`;

  try {
    connection.query(total_users, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in our Database.");
  }
});

// ------ SHOW ROUTE --------------
app.get("/user", (req, res) => {
  let getData = `SELECT * FROM user`;

  try {
    connection.query(getData, (err, userData) => {
      if (err) throw err;
      res.render("show.ejs", { userData });
    });
  } catch (err) {
    console.log(err);
    res.send("Can't connect to Database!!");
  }
});

// ------- EDIT ROUTE -------------
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let findUser = `SELECT * FROM user WHERE id = "${id}"`;

  try {
    connection.query(findUser, (err, userData) => {
      if (err) throw err;
      let user = userData[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Can't get user Id !!");
  }
});

// -------- UPDATE ROUTE -------------
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPassword, username: newUsername } = req.body;
  let findUser = `SELECT * FROM user WHERE id = "${id}"`;

  try {
    connection.query(findUser, (err, userData) => {
      if (err) throw err;
      let user = userData[0];
      if (formPassword != user.password) {
        res.send("Wrong password");
      } else {
        let updateUser = `UPDATE user SET username = "${newUsername}" WHERE id="${id}"`;

        try {
          connection.query(updateUser, (err, userData) => {
            if (err) throw err;
            res.redirect("/user");
          });
        } catch (err) {
          console.log(err);
          res.send("user not found");
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Invalid password");
  }
});

app.listen(PORT, () => {
  console.log(`app is listenning to port ${PORT}`);
});
