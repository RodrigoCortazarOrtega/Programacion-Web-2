const express=require("express");
const mysql=require("mysql2");
const bodyParser=require("body-parser");



const app= express();
//Manejar peticiones por medio de URI
app.use(bodyParser.urlencoded({extended:false})); // Para


//Configuracion de plantilla
app.set("view engine","ejs");


// Conexion a la db
const db=mysql.createConnection({
    host:"10.194.186.133", //Sevrer
    user:"pepe",//User
    password:"pepe",
    database:"pruebas",
    port:3306
});


//Validacion de l DB
db.connect(err=>{
    if(err){
        console.log("Sin conexion a la DB ",err);
    }else{
        console.log("Conectado")
    }
});

//Iniciar el servidor
app.listen(566,()=>{
    console.log("localhost:",566);
})


//Mostrar en lsta

app.get("/",(req,res)=>{
    //Consulta a la DB
    const consulta="SELECT * FROM users";
    //Usamos la db para conectarno a la base de datos
    db.query(consulta,(err,results)=>{
        if(err){
            console.error("No se encontro el user del Usuario");
            res.send("Error Comunicate con Soporte");
        }else{
            res.render("index",{users:results});
        }
    });
});




//Ingresar Usuario
app.post("/add",(req,res)=>{
    const {name,mail} = req.body;
    const insertarRegistroUsuario='INSERT INTO users(name,mail) value(?,?)';
    db.query(insertarRegistroUsuario,[name,mail],(err)=>{
        if(err){
            console.log("Eror")
        }else{
            res.redirect("/");
        }
    })
});


//Editar Usuario
app.get("/edit/:id",(req,res)=>{
    const {id} = req.params;
    const editar = "SELECT * FROM users WHERE id = ?";
    db.query(editar,{id},(err,results)=>{
        if(err){
            console.log("Error ",err);
        }else{
            res.renderer("edit",{r});
        }
    });
})