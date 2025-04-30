let pantalla= document.getElementById("pantalla");
let datos="";
let agregarPantalla=(v)=>{
    datos+=v;
    pantalla.value=datos;
}
let limpiar=()=>{
    datos="";
    pantalla.value="";
}

let calcular=()=>{
    try{
        let result=eval(pantalla.value);//Toma los elementos
        pantalla.value=result;
    }catch{
        pantalla.value="ERROR";
        datos="";
    }
}