const frutas=[];
const fruta=prompt("Que fruta deseas comprar?");
frutas.push(fruta);
while(confirm("Desea agregar fruta?")){
    const fruta= prompt("Que frutas quieres agregar");
    frutas.push(fruta);
}



for(f of frutas){
    console.log(f);
}