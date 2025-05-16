const express=require("express");
const path=require("path");
const routes=require("./routes/routes"); //Importamos las rutas

//Instancia
const app=express();
const port=3024;


//Sirve para archivos estaticos CSS
app.use(express.static(path.join(__dirname,"public")));

//
app.use("/",routes);
app.listen(port,console.log("localhost:"+port));









