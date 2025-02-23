//Primer problemas: ¿Cual numero es mayor?
let numUno = parseInt(prompt("Ingresa el primer numero"));
let numDos = parseInt(prompt("Ingresa Segundo Numero"));
if(numUno == numDos ){
    alert(numUno+" es igual a "+numDos); 
}else if(numUno>numDos){
    alert(numUno+" es mayor que "+numDos);
}else{
    alert(numUno+" es menor que "+numDos);
}



//Segundo problema: Adivinar el numero
let numeroUser;
let numeroMaquina=Math.floor(Math.random()*(10-1)-1);
console.log("Numero aleatorio: "+numeroMaquina);
let vidas=4;
while(numeroMaquina!=numeroUser && vidas>1){
    numeroUser=parseInt(prompt("Vida disponibles: "+vidas+".  Adivina el numero"));
    vidas--;
}

if(numeroUser==numeroMaquina){
    alert("Adivinaste el numero!");
}else{
    alert("No adivinaste el numero");
}


