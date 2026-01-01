const express = require("express");
const methodOverride = require("method-override");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json()); // parses JSON bodies
app.use(express.urlencoded({ extended: true })); // parses
app.use(methodOverride("_method"));

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love conding",
  },

  {
    id: uuidv4(),
    username: "Prajwal hon",
    content: "hard work is importance to achive success",
  },
  {
    id: uuidv4(),
    username: "kunal sing",
    content: "konw i pursuing MBA",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});



app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  // res.send("post request working");
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  // console.log(post);
  res.render("show.ejs", { post });
  // console.log(id);
  // res.send("id Was Createde ");
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  // console.log(newContent);
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  console.log(id);
  res.redirect("/posts");
  // res.send("Pacth request working");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
  // res.send("Delete success");
});

app.listen(port, () => {
  console.log(`listening to port : ${port}`);
});
