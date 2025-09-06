const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful!!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/office-data");
}

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  salary: Number,
});

const Empdata = mongoose.model("Empdata", employeeSchema);

const emp2 = new Empdata({
  name: "Frederic",
  email: "Frederic.Welch58",
  salary: 85000,
});

emp2
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
