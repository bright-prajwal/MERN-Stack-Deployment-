const { faker, th, el } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const { v4: uuidv4 } = require("uuid");
const { throws } = require("assert");

const port = 8080;

app.use(methodOverride("_method"));
app.use(express.json()); // parses JSON bodies
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta",
  password: "Prajwal9075@#",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

let q = "insert into user (id, username, email, password) values ?";

// let users = [
//   ["123b", "123_newuserb", "xcvs@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "xcvs@gmail.comc", "abcc"],
// ];

// let data = [];
// for (let i = 0; i <= 100; i++) {
//   data.push(getRandomUser());
// }

//Routs

app.get("/", (req, res) => {
  let q = "select count(*) from user";

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error i database");
  }
});

app.get("/user", (req, res) => {
  let q = "select * from user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // console.log(data);
      res.render("user.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error occurrd");
  }
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  //   res.render("edit.ejs");
  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      //   console.log(result);
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in occurred in database ");
  }
});

// Update Route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  //   res.render("edit.ejs");
  let q = `select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (formPass != user.password) {
        res.send("Password Wrong");
      } else {
        let q2 = `update user set username='${newUsername}' where id='${id}'`;
        try {
          connection.query(q2, (err, result) => {
            if (err) throw err;
            // res.send(result);
            res.redirect("/user");
          });
        } catch (err) {
          console.log(err);
          res.send("error updete database");
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in occurred in database ");
  }
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  //   res.render("edit.ejs");
  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      //   console.log(result);
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in occurred in database ");
  }
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;

  let q = `select * from user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (formPass != user.password && password != user.password) {
        res.send("Wrong Username and Password");
      } else {
        let q1 = `DELETE FROM user WHERE id='${id}'`;
        try {
          connection.query(q1, (err, result) => {
            if (err) throw err;
            // res.send("Recored Delete");
            res.redirect("/user");
          });
        } catch (err) {
          console.log(err);
          res.send("error in delete query");
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in occurred in database ");
  }
});

// console.log(getRandomUser());
app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});

// connection.end()
