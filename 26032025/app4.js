let tareas=[];

let mostrarMenu =  ()=>{
return parseInt(prompt(
    "Opciones Disponibles: \n"+
    "1. Agregar Tarea\n"+
    "2. Ver todas las tareas\n"+
    "3. Marcar una tarea como completada\n"+
    "4. Salir"
))
}



function agregarTarea(){
    let nombre=prompt("Introdsuce el nombre de la tarea");
    if(nombre){
        let tarea={
            nombre:nombre,
            completada:false
        }
        tareas.push(tarea);
    }else{

    }

}
function verTareas(){
    if(tareas.length===0){
        alert("No hay tareass en lista");
    }else{
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea,index)=>{
            mensaje+=`${index+1} . ${tarea.nombre} . [${tarea.completada}]`;
        });
        return mensaje;
    }
}


function marcarTareaCompletada(){

}

function iniciarPrograma(){
    let codicion  = true;
    while(codicion){
        let opc=mostrarMenu();
        switch(opc){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliedo del programa");
                codicion=false;
                break;
            default:
                alert("Opc'7 no valida");
        }
    }    
}


iniciarPrograma();1
