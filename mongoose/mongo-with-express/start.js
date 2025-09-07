const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
  newChat
    .save()
    .then((res) => {
      console.log("Chat was saved.");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// ------- EDIT ROUTE -------------------
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit-chat.ejs", { chat });
});

// -------- UPDATE ROUTE ---------------
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/chats");
});

// -------- DELETE ROUTE --------------
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
