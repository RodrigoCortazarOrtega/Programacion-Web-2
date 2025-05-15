const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/indexQr.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/qr.html"));
});


module.exports=router;