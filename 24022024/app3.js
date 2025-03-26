function suma(a,b){
    return parseInt(a)+parseInt(b);
}
function resta(a,b){
    return parseInt(a)-parseInt(b);
}
function multi(a,b){
    return parseInt(a)*parseInt(b);
}
function div(a,b){
    return parseInt(a)/parseInt(b);
}

console.log("Total Suma: "+suma(prompt("Ingresa primer numero"),prompt("Ingresa segundo numero")));
console.log("Total Resta: "+resta(prompt("Ingresa primer numero"),prompt("Ingresa segundo numero")));
console.log("Total Multi: "+multi(prompt("Ingresa primer numero"),prompt("Ingresa segundo numero")));
console.log("Total Div: "+div(prompt("Ingresa primer numero"),prompt("Ingresa segundo numero")));
