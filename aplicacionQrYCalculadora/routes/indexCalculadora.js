const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/indexCalculadora.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/indexCalculadora.html"));
});


module.exports=router;