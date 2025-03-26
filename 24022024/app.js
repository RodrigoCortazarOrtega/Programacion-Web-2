//Arreglos
let frutas = ["Manzana","Pera","Palta","Mango"];
console.log(frutas);
console.log("Tamaño: "+frutas.length);
console.log("Indice 2: "+frutas[2]);
console.log(frutas[15]);

console.log("\nBUCLE FOR");
for(let i=0; i<frutas.length ;i++){
    console.log("Indice: "+i+"; Elemento: "+frutas[i]);
}

//FORUP
console.log("\nFORUP");
for(const fruta of frutas){
    console.log(fruta);
}

//Tabla de tres y diez anidada
console.log("\nTabla del tres");
for(let i=1; i<=10;i++){
    console.log("3 x "+i+" = "+(3*i))
    console.log("\tTabla 10");
    for(let j=1; j<=10;j++){
        console.log("\t10 X "+j+" = "+(j*10));
    }
}











