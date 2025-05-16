const express=require("express");

const routes=require("./routes");

//Intanciamos express
const app=express();
//Puero
const puerto=3089;

app.use("/",routes);

app.listen(puerto,()=>{
    console.log(puerto)
});
