let tareas = [];
function mostrarMenu(){
    return parseInt(prompt(
        "OPCIONES disponibles\n"+
        "1. Agregar tarea\n"+
        "2. Ver todas las tareas\n"+
        "3. Marcar tarea como completada\n"+
        "4. Salir\n"+
        "Elige una opcion"
    ));

}

function agregarTarea(){
    let nombre=prompt("Introduce el nombre de la tarea");
    if(nombre){
        let tarea = {
            nombre : nombre,
            completado:false
        }
        tareas.push(tarea);
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}


function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el numero de la tarea a marcar como completada"));
    if(numero > 0 && numero < tareas.length){
        tareas[numero-1].completado=true;
        alert(`Tarea ${numero} completada!`);
    }else{
        alert(`Numero de tarea invalido`);
    }
}

function iniciarPrograma(){
    let continuar=true;
    while(continuar){
        let opc = mostrarMenu();
        switch(opc){
            case 1:
                agregarTarea();
                break;
            case 2:
                varTarea();
                break;
            case 3: 
                marcarTareaCompletada();
                break;
            case 4:
                continuar=false;
                alert("Saliendo del programa");
                break;
            default:
                alert("Opcion no Valida");
        }
    }
    alert("Programa Terminado");
}


//
// iniciarPrograma();
