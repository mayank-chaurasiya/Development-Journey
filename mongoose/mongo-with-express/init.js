const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful!!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}

let allChats = [
  {
    from: "Mayank",
    to: "Khushi",
    message: "Hii Baby How are you?",
    created_at: new Date("2023-06-18T10:00:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "I'm good! How about you?",
    created_at: new Date("2023-06-18T10:01:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "I'm doing great, just finished my work.",
    created_at: new Date("2023-06-18T10:02:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "That's awesome! Any plans for today?",
    created_at: new Date("2023-06-18T10:03:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "Maybe a movie night. Want to join?",
    created_at: new Date("2023-06-18T10:04:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "Sure! Which movie?",
    created_at: new Date("2023-06-19T09:00:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "How about Inception?",
    created_at: new Date("2023-06-19T09:01:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "Perfect! What time?",
    created_at: new Date("2023-06-19T09:02:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "Let's meet at 7 PM.",
    created_at: new Date("2023-06-19T09:03:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "See you then!",
    created_at: new Date("2023-06-19T09:04:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "Good morning!",
    created_at: new Date("2023-06-20T08:00:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "Good morning! Slept well?",
    created_at: new Date("2023-06-20T08:01:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "Yes! Excited for tonight.",
    created_at: new Date("2023-06-20T08:02:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "Me too!",
    created_at: new Date("2023-06-20T08:03:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "Should I bring snacks?",
    created_at: new Date("2023-06-20T08:04:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "Yes, please!",
    created_at: new Date("2023-06-21T11:00:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "Popcorn and chips?",
    created_at: new Date("2023-06-21T11:01:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "Sounds good!",
    created_at: new Date("2023-06-21T11:02:00Z"),
  },
  {
    from: "Mayank",
    to: "Khushi",
    message: "See you at 7!",
    created_at: new Date("2023-06-21T11:03:00Z"),
  },
  {
    from: "Khushi",
    to: "Mayank",
    message: "Can't wait!",
    created_at: new Date("2023-06-21T11:04:00Z"),
  },
];

Chat.insertMany(allChats);
