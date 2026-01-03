// const { kMaxLength } = require("buffer");
// const { generateKey } = require("crypto");
const mongoose = require("mongoose");
// const { type } = require("os");
// const { title, disconnect } = require("process");
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazone");
}

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1,"Price is tool low for amazone selling "],
  },
  discount: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  genre: [String],
});

const Book = new mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("69580eab272e86a45ff616f7",{price:-111},{runValidators:true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price);
  });

// Book.findByIdAndDelete('695808da6f47515f1d374c06')
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let book1 = new Book({
//   title: "Marvel Comics v2",
//   price: "822",  //it work parce data
//   genre:["comics","superheroes","fiction"]
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
