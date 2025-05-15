/*
Modulo express 
Previamente se tuvo que descarga dentro del proyecto el modulo con:
npm install express
*/
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