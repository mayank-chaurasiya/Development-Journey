const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "preeti",
    msg: "send me notes for the exam",
    created_at: new Date(),
  },
  {
    from: "daya",
    to: "jetha",
    msg: "Jai Jinendra!!",
    created_at: new Date(),
  },
  {
    from: "Khushi",
    to: "mayank",
    msg: "did you take bath today?",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohit",
    msg: "How are you doing?",
    created_at: new Date(),
  },
  {
    from: "Ruhi",
    to: "sunita",
    msg: "Happy Birthday!!",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "sumit",
    msg: "All the best for the exam",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
