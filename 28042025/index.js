const puerto=49201;
const http=require("node:http");
const server=http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Encabezado OK, tipo texto
    res.end('Pagina en progreso'); // Respuesta final al cliente
});

server.listen(puerto,console.log("Sevidor en escucha desde http://127.0.0.1:"+puerto));