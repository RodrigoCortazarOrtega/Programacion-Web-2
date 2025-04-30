let led = document.getElementById("estado");
let inputs =document.getElementsByClassName("btns");
let edo=false;
let pantalla=document.getElementById("pantalla");
let arranque = ()=>{
    if(edo){
        edo=false;
        led.style="background-color:red;";
        pantalla.value="";
        for(let i=0; i<inputs.length;i++){
            inputs[i].disabled=true;
        }
    }else{
        edo=true;
        led.style="background-color:green;";
        for(let i=0; i<inputs.length;i++){
            inputs[i].disabled=false;
        }
    }
}

let addElement=(e)=>{
    pantalla.value+=e;
}
let obtenerResultado=()=>{
    try{
        if(pantalla.value.length>0){
            pantalla.value=eval(pantalla.value);
        }
    }catch{
        alert("Error en  definicion de operacion");
        pantalla.value="";
    }
}
let borrarUltimo=()=>{
    pantalla.value=pantalla.value.substring(0, pantalla.value.length-1)
}