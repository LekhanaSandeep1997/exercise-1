var express = require('express');

var app = express();

app.listen(3500,()=>{
    console.log("Listening in port 3500...");
});

app.get("/", (req, res) =>{
    res.send("HI Welcome");
});

app.get("/api/ex1", (req, res) =>{
    let arr = ["ex1","ex2"]
    res.send(arr);
});

app.get("/api/ex1/:randomUrl", (req, res) => {
    let filterby = req.query.filterby
    res.send("Hi Welcome to this page " + req.params.randomUrl + " and filter By " + filterby);
});