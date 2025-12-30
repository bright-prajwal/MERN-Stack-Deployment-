const express = require("express");
const app = express();
// console.log(app);
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  let { user1, password } = req.query;
  res.send(`standard GET response. Welcome ${user1}`);
});

app.post("/register", (req, res) => {
  // console.log(req.body);
    let { user2, password } = req.body;// using html form
//   let { user2, password } = req.query; // use for json data thorug hoppchoche
  res.send(`standard POST response. Welcome ${user2}`);
});

app.listen(port, () => {
  console.log(`listening to port ${port}.`);
});
