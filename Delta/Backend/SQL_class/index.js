const express = require("express");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let port = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "SQL@Account",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home page
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in Database.");
  }
});

// Show route
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("users.ejs", { users });
      //   res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.send("some error in Database.");
  }
});

// Edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in Database.");
  }
});

//Update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let query = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("Incorrect password");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in Database.");
  }
});

// Add new User
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/user/new", (req, res) => {
  let { username, email, password } = req.body;
  let id = uuidv4();

  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}')`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("added new user");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occurred");
  }
});

app.get("user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with Database");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM  user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("wrong password");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with database.");
  }
});

app.listen("8080", () => {
  console.log(`listening on port ${port}`);
});

// connection.end();
