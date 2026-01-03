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


// Insert multiple data

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 }
// ])
// .then((data) => {
//   console.log(data);
// });

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

// Update One recorde on macth condition

User.updateOne({ _id: "6957b943c351342e20f2d53f" }, { age: 20 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Update multiple recorde on macth conditon
User.updateMany({ age: { $gt: 48 } }, { age: 55 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findOneAndUpdate({ name: "Vision" }, { age: 88 })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//   User.insertMany([
//   { name: "Steve", email: "steve@gmail.com", age: 45 },
//   { name: "Natasha", email: "natasha@gmail.com", age: 35 },
//   { name: "Wanda", email: "wanda@gmail.com", age: 29 },
//   { name: "Vision", email: "vision@gmail.com", age: 5 },
//   { name: "Clint", email: "clint@gmail.com", age: 44 },
//   { name: "Sam", email: "sam@gmail.com", age: 38 },
//   { name: "Bucky", email: "bucky@gmail.com", age: 106 }
// ])
// .then((data) => {
//   console.log(data);
// });

// const user2 = new User({
//   name: "XZY",
//   email: "hbhbf@gamil.com",
//   age: 545,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
