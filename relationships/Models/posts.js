const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async () => {
  let result = await Post.findOne({}).populate("postedBy", "username");
  console.log(result);
};

getData();
// const addData = async () => {
//   let user1 = await User.findOne({ username: "Khushitiwari" });

//   let post2 = new Post({
//     content: "Byeee",
//     likes: 80,
//     postedBy: user1._id,
//   });

//   await post2.save();
// };

// addData();
