const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

let PORT = 4000;

//---------- SETTING UP MONGOOSE ----------
main()
  .then(() => {
    console.log("connection successful!!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// -------- HOME ROUTE -------------------
app.get("/", (req, res) => {
  res.send("app is working");
});

// ------- GET CHATS ROUTE ---------------
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.render("all-chats.ejs", { chats });
});

// ------- NEW ROUTE --------------------
app.get("/chats/new", (req, res) => {
  res.render("new-chat.ejs");
});

// ------- CREATE ROUTE -----------------
app.post("/chats", (req, res) => {
  let { from, to, message } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    created_at: new Date(),
  });
  console.log(newChat);
  res.send("Working");
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
