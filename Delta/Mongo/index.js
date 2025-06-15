const mongoose = require("mongoose");

main()
  .then((result) => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.deleteOne({ name: "Bruce" }).then((res) => {
  console.log(res);
});

// User.updateOne({ name: "Bruce" }, { age: 50 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// User.find({ age: { $lt: 50 } })
//   .then((result) => {
//     console.log(result[0].name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@yahoo.in", age: 26 },
//   { name: "Bruce", email: "bruce@yahoo.in", age: 27 },
// ]).then((result) => {
//   console.log(result);
// });

// const user2 = new User({
//   name: "Mayank",
//   email: "mayank@yahoo.in",
//   age: 21,
// });

// user2
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
