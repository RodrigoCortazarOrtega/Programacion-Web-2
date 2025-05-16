const express = require("express");
const path = require("path");

const puerto=4466;
const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
});

app.listen(puerto,console.log("Montado"));





