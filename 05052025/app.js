const express=require("express");
const app=express()
const path=require("path");

const port=3059;
app.get("/",(req, res)=>{
    /*res.send("index.html");*/
    /*res.sendFile("C:/Users/AzaLo/proyecto/05052025/index.html");*///Solo va  a mostrar el index sin estilos
    res.sendFile(path.join(__dirname+"/index.html"));
});
app.listen(port,()=>{
    console.log("Puerto: "+port);
});