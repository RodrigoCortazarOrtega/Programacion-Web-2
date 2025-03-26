//Funcion declarativa
function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log("N aleatorio: "+numeroAleatorio(3,1));

//Funcion Exxpresada
const miNumero = function(min, max){        
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(1,11));


//Funciones Flecha


const dato = (max,min)=>Math.floor(Math.random()*(max-min)+min);



const array1=['a','b','d'];

console.log("For Each");//Intrnamente invocada por un callbasck
array1.forEach(element=>console.log(element));




let frutas = ["Manzana","Sandia","Pera"]
console.log("\nForEach frutas");
frutas.forEach(element=>console.log(element));












