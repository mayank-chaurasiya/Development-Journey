const mongoose = require("mongoose");

main()
  .then((result) => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "Please enter a valid price"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  genre: [String],
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
  "68035bc738db9ecd32a5e045",
  { price: -500 },
  { runValidators: true }
)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// let book1 = new Book({
//   title: "Marvel Comics",
//   price: 1200,
//   category: "fiction",
// });
// book1
//   .save()
//   .then((result) => {
//     console.log(result.title);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
