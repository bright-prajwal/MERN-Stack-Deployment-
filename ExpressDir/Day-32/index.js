const express = require("express");
const app = express();
// console.dir(app)

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})

// app.use((req,res )=>{
//     console.log(`requst receviced`);
//     // res.send({
//     // name:"apple",
//     // color:"red"
//     // })

//     let code="<h1>Furits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code);
// })



app.get("/",(req,res)=>{
    // res.send("you send contacted root path");
    res.send("hello, i am root ")

})

app.get("/apple",(req,res)=>{
    res.send("you contacted apple  path");
})


app.get("/orange",(req,res)=>{
    res.send("you contacted orange  path");
})

// app.get('*',(req,res)=>{
//     res.send("this path does not found");

// })

app.post("/",(req,res)=>{
    res.send("you send a post request on root page");  

})


app.get("/:username/:id",(req,res)=>{
    let {username ,id}=req.params;

    let htmlStr="<H3>Welcome to the page of @${username}</H3>";
    res.send(htmlStr);
    // console.log(req.params)
    // res.send(`Welcome to the page of @${username}`);

})


app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("<h1>nothing serarch</h1>")
    }
    res.send(`search results for query : ${q}`);
})