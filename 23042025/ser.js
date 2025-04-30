const express = requiere("express");
const path= requiere("path"); // Para navegar entre paquetas dentro de node
const app = express;

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"index.html"))
});

const port=3005;













