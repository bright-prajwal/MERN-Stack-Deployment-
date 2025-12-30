const express = require("express");
const app = express();
const path = require("path")
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/JS")));
app.get("/", (req, res) => {
    res.render("home.ejs  ");
})


app.get("/hello", (req, res) => {
    res.send("hello");
})

app.get("/rolldice", (req, res) => {
    let dicVal = Math.floor(Math.random() * 6 + 1);
    res.render("rolldice", { dicVal })
    // res.render("rolldice",{dicVal:dicVal})
    // res.render("rolldice",{num:dicVal})  
    // res.render("rolldice.ejs");
})


// Instagram Roust

app.get("/:ig/:username", (req, res) => {
    const followers = ["adam", "bob", "steve", "xyz"];
    let { username } = req.params;
    console.log(username);
    res.render("instagram", { username, followers });

    // const instaData=require("./data.json");
    // console.log(instaData);  
    // res.render("instagram.ejs") 
})


app.get("/data/:id/:usernames", (req, res) => {
    let { usernames } = req.params;
    const instaData = require("./data.json");
    const data = instaData[usernames];
    // console.log(data);
    if (data) {
        res.render("instagram_data.ejs", { data })
    }else{
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})



