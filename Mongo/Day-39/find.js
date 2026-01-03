const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then((res) => {
    console.log("Connection Successful");
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

// find method to return all data according to conditation macth

User.find({ age: { $gt: 47 } })
  .then((res) => {
    console.log(res[0].name);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOne({ age: { $gt: 47 } })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });