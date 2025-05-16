const express=require("express");
const router=express.Router()//Para segmentar los archivos o rutas.Exportarlo


const path=require("path");


//definicion de rutas y manejadores
router.get("/",(req,res)=>{
    /*res.send("holamundo");*/
    res.sendFile(path.join(__dirname+"/../index.html"))
});


module.exports=router;