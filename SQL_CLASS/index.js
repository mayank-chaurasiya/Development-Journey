const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

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

let query = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];
for (let i = 1; i <= 100; i++) {
  data.push(createRandomUser()); // 100 fake user's data
}

try {
  connection.query(query, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();
