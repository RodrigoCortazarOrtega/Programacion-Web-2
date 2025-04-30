//Importamos el modulo de http incluido en Node.js
const serverCreadoHTTTP=require("node:http");
//Definimos el puerto donde va a tener salida nuestro servidor
const puertoSalida=4038;
//Creamos el sevidor
const servidorCreado=serverCreadoHTTTP.createServer((req,res)=>{
    //Establece el encabezado de respuesta
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.end("Hola mundo desde Node.js con el modulo http");
});
servidorCreado.listen(puertoSalida,()=>{
    console.log("Sevidor en escucha desde http://127.0.0.1:"+puertoSalida);
});
//Con middleware haremos las peticiones, registros ,...





//De tarea: Generar una replica de esto funcional