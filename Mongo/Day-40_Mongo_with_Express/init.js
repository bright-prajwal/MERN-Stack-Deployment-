const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "sumit",
    msg: "send me your exam sheets",
    // message:"send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "amita",
    to: "Pranv",
    msg: "all the best",
    created_at: new Date(),
  },

  {
    from: "anita",
    to: "ramesh",
    msg: "bring the same fruits",
    created_at: new Date(),
  },
  {
    from: "tony",
    to: "peter",
    msg: "best of luck",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})

