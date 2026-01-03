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

User.findOneAndUpdate({ name: "Vision" }, { age: 66 }, { new: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.deleteOne({ _id: "6957d025e6e97edeb13f9ddd" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.deleteMany({ age: 55 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findByIdAndDelete('6957d025e6e97edeb13f9ddc')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
