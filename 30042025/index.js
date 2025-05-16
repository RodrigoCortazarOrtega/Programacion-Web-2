/*
Modulo express 
Previamente se tuvo que descarga dentro del proyecto el modulo con:
npm install express
*/
//----------Primer Server----------------
const express=require("express");
const app =  express();//Generamos una instancia
const port=50021;
// Ruta de salida de la petición (Response)
app.get('/', (req, res) => {
    res.send('Hola Mundo desde el puerto '+port);//Para enviar una cadena
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//----------Segundo Server----------------
const app2 =  express();
const port2=50022;
app2.get('/', (req, res) => {
    res.send('Hola Mundo desde el puerto '+port2);
});
app2.listen(port2, () => {
    console.log(`Servidor escuchando en http://localhost:${port2}`);
});
//----------Tercer Server----------------
const app3 =  express();
const port3=50023;
app3.get('/', (req, res) => {
    res.send('Hola Mundo desde el puerto '+port3);
});
app3.listen(port3, () => {
    console.log(`Servidor escuchando en http://localhost:${port3}`);
});
//----------Cuarto Server----------------
const app4 =  express();
const port4=50024;
app4.get('/', (req, res) => {
    res.send('Hola Mundo desde el puerto '+port4);
});
app4.listen(port4, () => {
    console.log(`Servidor escuchando en http://localhost:${port4}`);
});






/*
Tarea:
Levantar Cinco sertvidores en Node: Que diga hola desde el puerto tal utilizando diferentes buscadores.
Leer lo del 28 de abril.


Notas:
Cuando se pasa el proyecto , no se pasan los modulos debido al tamanaño
Alternativa: Se generara un archivo .gitignore que incluira los archivos a ignorar:
        node_modules
Para volver a descargar los modulos utilizaremos npm install que detectara los modulos requeridos y los descargara

*/ 