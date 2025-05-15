const express = require("express");
const app=express();
const path = require("path");
const port=4567;
const rutaCalculadora=require("./routes/indexCalculadora.js");
const rutaQr=require("./routes/indexQr.js");
app.use(express.static(path.join(__dirname,"public")));
app.use("/calculadora",rutaCalculadora);
app.use("/qr",rutaQr);
app.listen(port,()=>{
    console.log("localhost:"+port)
});