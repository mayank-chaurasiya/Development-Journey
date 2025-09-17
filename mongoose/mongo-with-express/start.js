const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

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
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

// -------- HOME ROUTE -------------------
app.get("/", (req, res) => {
  res.send("app is working");
});

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// ------- GET CHATS ROUTE ---------------
app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    res.render("all-chats.ejs", { chats });
  })
);

// ------- NEW ROUTE --------------------
app.get(
  "/chats/new",
  asyncWrap(async (req, res, next) => {
    // throw new ExpressError(404, "Page not found");
    res.render("new-chat.ejs");
  })
);

// ------- CREATE ROUTE -----------------
app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      message: message,
      created_at: new Date(),
    });

    await newChat.save();
    res.redirect("/chats");
  })
);

// ------- NEW SHOW ROUTE ---------------
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    // if (!mongoose.isValidObjectId(id)) {
    //   return next(new ExpressError(404, "chat id invalid"));
    // }

    let chat = await Chat.findById(id);
    if (!chat) {
      return next(new ExpressError(404, "chat not found"));
    }
    res.render("edit-chat.ejs", { chat });
  })
);

// ------- EDIT ROUTE -------------------
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit-chat.ejs", { chat });
  })
);

// -------- UPDATE ROUTE ---------------
app.put(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let { message: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { message: newMsg },
      { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
  })
);

// -------- DELETE ROUTE --------------
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  })
);

const handleValidationErr = (err) => {
  console.log("This was a validation error. please follow the rules.");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

// --------- ERROR HANDLING MIDDLEWAR3 -------------
app.use((err, req, res, next) => {
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
